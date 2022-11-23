import React from 'react'
import Script from "next/script";

export const PostComments = ({ slug }) => {
    return(<>
      <Script
        id="fb-root" 
        async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6"
      />
      <div className="fb-comments" data-href={`https://facanada.vercel.app/post/${slug}`} data-width="100%" data-numposts="5"></div>
    </>)
}

export const DiscussionComments = () => {
    return(<>
        <Script
          id="fb-root" 
          async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6"
        />
        <div className="fb-comments" data-href={`https://facanada.vercel.app/category/`} data-width="100%" data-numposts="5"></div>
      </>)
  }
  