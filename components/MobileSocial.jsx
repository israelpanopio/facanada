import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Script from "next/script";
import { Link } from 'react-scroll'

const MobileSocial = ({ slug }) => {  
  const [commentLink, setCommentLink] = useState();

  useEffect(() => {
    if (slug.slice(0, 5) == "faqs/") {
      setCommentLink(`${slug}`)
    } else {
      setCommentLink(`post/${slug}`)
    }
  })
  
      return (<>
        <Script
          id="fb-root" 
          async defer crossorigin="anonymous" 
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v15.0&appId=366180864923538&autoLogAppEvents=1" 
          nonce="fERdatdU"
        />
        <SocialDiv>
          <Content>
            <div 
              className="fb-like" data-action="like" data-size="large"
              data-href={`https://www.ph2canada.com/${commentLink}`} 
              data-width="" data-layout="button_count"  data-share="true"></div>
            <FButton><LinkS  to="comments" smooth={true} duration={500} spy={true} exact='true' offset={-60}>Comments</LinkS></FButton>
          </Content>
        </SocialDiv>
      </>
    )
}

export default MobileSocial

const SocialDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px;
  position: sticky;
  bottom: 0;
  margin-bottom: 0;
  padding-bottom: 20px;
  padding-top: 3px;
  z-index: 10;

  @media screen and (max-width: 900px) {
  background: white;
}
`
const Content = styled.div`
  @media screen and (max-width: 900px) {
  max-width: 92vw;
  margin: auto;
}
`

const FButton = styled.button`
  background: #3578e5;
  border: none;
  box-sizing: border-box;
  color: #fff;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 0;
  padding: 6px 10px;
  border-radius: 4px;
  width: calc(80vw - 185px);
  z-index: 12;
  font-weight: bold;

  @media screen and (min-width: 900px) {
  display: none;
}
`
const LinkS = styled(Link)`
  text-decoration: none;
  
  &:hover {
      color: white;
    }
`