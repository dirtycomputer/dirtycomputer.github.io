(()=>{
  const nativeFetch=window.fetch.bind(window);
  let seq=0;

  function jsonpGviz(input){
    return new Promise((resolve,reject)=>{
      const cb=`__gs_gviz_${Date.now()}_${seq++}`;
      const u=new URL(String(input),location.href);
      u.searchParams.set('tqx',`out:json;responseHandler:${cb}`);
      u.searchParams.set('_',Date.now().toString());

      const script=document.createElement('script');
      let timer;
      const clean=()=>{
        clearTimeout(timer);
        script.remove();
        try{delete window[cb]}catch(e){window[cb]=undefined}
      };

      window[cb]=(payload)=>{
        clean();
        resolve({
          ok:true,
          status:200,
          text:async()=>JSON.stringify(payload),
          json:async()=>payload
        });
      };

      script.src=u.toString();
      script.async=true;
      script.onerror=()=>{clean();reject(new Error('Google Sheet JSONP load failed'))};
      timer=setTimeout(()=>{clean();reject(new Error('Google Sheet JSONP timeout'))},15000);
      document.head.appendChild(script);
    });
  }

  window.fetch=(input,init)=>{
    const url=typeof input==='string'?input:(input&&input.url)||'';
    if(url.includes('docs.google.com/spreadsheets/')&&url.includes('/gviz/tq')){
      return jsonpGviz(url);
    }
    return nativeFetch(input,init);
  };
})();