import React from 'react'
import styled from 'styled-components'

const DesktopComments = ({ slug, openComments, refreshPage }) => {  
  return (
    <Comments id="comments" openComments={openComments} >
    <button onClick={refreshPage}>Click me to update comments</button>
      <div id="fb-root"></div>
      <div className="fb-comments" data-href={`https://www.ph2canada.com/post/${slug}`} data-width="100%" data-numposts="2"></div>
    </Comments>
  )
}

export default DesktopComments

const Comments = styled.div`
  bottom: 0;
  opacity: ${({ openComments }) => (openComments ? '100%' : '0')};
  display:  ${({ openComments }) => (openComments ? 'block' : 'none')};
`