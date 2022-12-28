import React, { useEffect, useState, useRef }  from 'react'
import styled from 'styled-components'


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
    <Comments id="comments">
      <div id="fb-root"></div>
      <div className="fb-comments" data-href={`https://www.ph2canada.com/${commentLink}`} data-width="100%" data-numposts="2"></div>
    </Comments>
  )
}

export default DesktopComments

const Comments = styled.div`
`