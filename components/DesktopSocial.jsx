import React, { useState } from 'react'
import styled from 'styled-components'

const DesktopSocial = ({ slug, toggleComments, openComments, closeComment }) => {
   if (slug) {
      return (
        <SocialDiv>
          <FButton onClick={toggleComments}>{openComments ? 'Close Comments' : 'See Comments'}</FButton>
        </SocialDiv>
    )
   } else {
    return(<></>)
  }
}

export default DesktopSocial

const SocialDiv = styled.div`
  position: sticky;
  bottom: 1%;
  margin-bottom: 0;
  z-index: 10;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

const FButton = styled.button`
  background: #3578e5;
  border: none;
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  margin-top: 24px;
  padding: 12px;
  border-radius: 8px;
  width: 340px;
  z-index: 12;
  font-weight: bold;
`