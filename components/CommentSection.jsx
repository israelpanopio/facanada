import React from 'react'
import Script from "next/script";

export default function PostComments({ slug }) {
    return(<>
      <div className="fb-comments" data-href={`https://www.ph2canada.com/post/${slug}`} data-width="100%" data-numposts="1"></div>
    </>)
}


// export const DiscussionComments = ({ slug }) => {
//   function refreshPage() {
//     window.location.reload(false);
//   }
//     return(<><div id="fb-root"></div>
//         <div className="fb-comments" data-href={`https://www.ph2canada.com/discussion/${slug}`} data-width="100%" data-numposts="5"></div>
//       <p>Can't see the comment's section? <button onClick={refreshPage}>Click me to reload!</button></p>
//       </>)
//   }
  