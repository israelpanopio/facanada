import React from 'react'
import Script from "next/script";

export const PostComments = ({ slug }) => {
    return(<>
      <Script
        id="fb-root" 
        async defer crossorigin="anonymous" 
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v15.0&appId=366180864923538&autoLogAppEvents=1"
        nonce="d54tkTcn"
      />
      <div className="fb-comments" data-href="http://localhost:3000/post/whats-next" data-width="100%" data-numposts="5"></div>
    </>)
}

export const DiscussionComments = () => {
    return(<>
        <Script
        id="fb-root" 
        async defer crossorigin="anonymous" 
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v15.0&appId=366180864923538&autoLogAppEvents=1"
        nonce="d54tkTcn"
      />
        <div className="fb-comments" data-href={`https://facanada.vercel.app/category/`} data-width="100%" data-numposts="5"></div>
      </>)
  }
  