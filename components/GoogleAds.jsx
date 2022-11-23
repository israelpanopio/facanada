import React, { useEffect } from 'react'

const GoogleAds = () => {   
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
        style={{display:"block", margin:"auto"}}
        data-ad-client="ca-pub-4841621324421656"
        data-ad-slot="6509252855"
        data-ad-format="auto"
        data-full-width-responsive="true">
    </ins>
  )
}

export default GoogleAds