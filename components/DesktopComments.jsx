import React, { useEffect, useState }  from 'react'
import styled from 'styled-components'

const DesktopComments = ({ slug, openComments }) => {  
  const [commentLink, setCommentLink] = useState();

  useEffect(() => {
    if (slug.slice(0, 5) == "faqs/") {
      setCommentLink(`${slug}`)
    } else {
      setCommentLink(`post/${slug}`)
    }
  })
  
  return (
    <Comments id="comments" openComments={openComments} >
      <div id="fb-root"></div>
      <div className="fb-comments" data-href={`https://www.ph2canada.com/${commentLink}`} data-width="100%" data-numposts="2"></div>
    </Comments>
  )
}

export default DesktopComments

const Comments = styled.div`
  bottom: 0;
  opacity: ${({ openComments }) => (openComments ? '100%' : '0')};
  display:  ${({ openComments }) => (openComments ? 'block' : 'none')};
`