import React, { useEffect, useState, useRef }  from 'react'

const DesktopComments = ({ slug }) => {  
  return (
    <div id="comments">
      <div id="fb-root"></div>
      <div className="fb-comments" data-href={`https://www.ph2canada.com/post/${slug}`} data-width="100%" data-numposts="2"></div>
    </div>
  )
}

export default DesktopComments