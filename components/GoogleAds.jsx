import React, { useEffect } from 'react'

const GoogleAds = ({ads}) => {   
  const adSize = "10vh";

    useEffect(() => {
      var ads = document.getElementsByClassName("adsbygoogle").length;
      for (var i = 0; i < ads; i++) {
        try {
          (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) { }
      }
  }, []);

  if (!ads) {
    return (<>
      <ins className="adsbygoogle"
          style={{display:"block", margin:"auto"}}
          data-ad-client="ca-pub-4841621324421656"
          data-ad-slot="6509252855"
          data-ad-format="auto"
          data-full-width-responsive="true">
      </ins>
    </>
    )
  } else if (ads == "article") {  
    return (
      <ins className="adsbygoogle"
          style={{display:"block", textAlign:"center"}}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-4841621324421656"
          data-ad-slot="4122468441">
      </ins>
    )
  } else {  
  return (
    <ins className="adsbygoogle"
        style={{display:"block", height:`${(ads == "infeed") ? "11vh" : `${(ads == "top") ? "15vh" : ads}`}`}}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-4841621324421656"
        data-ad-slot="9728165333">
    </ins>
  )
}
}

export default GoogleAds