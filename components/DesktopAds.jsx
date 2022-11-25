import React, { useEffect } from 'react'

const DesktopAds = () => {   
    useEffect(() => {
      var ads = document.getElementsByClassName("adsbygoogle").length;
      for (var i = 0; i < ads; i++) {
        try {
          (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) { }
      }
  }, []);

  return (
    <ins className="adsbygoogle"
        style={{display:"block", height:"15vh"}}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-4841621324421656"
        data-ad-slot="6509252855">
    </ins>
    )
}

export default DesktopAds
