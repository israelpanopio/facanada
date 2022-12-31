import React, { useEffect, useState, useRef }  from 'react'

const DesktopComments = ({ slug }) => {  
  const [commentLink, setCommentLink] = useState();

  useEffect(() => {
    if (slug.slice(0, 5) == "faqs/") {
      setCommentLink(`${slug}`)
    } else {
      setCommentLink(`post/${slug}`)
    }
  })
  
  return (
    <div id="comments">
      <div id="fb-root"></div>
      <div className="fb-comments" data-href={`https://www.ph2canada.com/${commentLink}`} data-width="100%" data-numposts="2"></div>
    </div>
  )
}

export default DesktopComments