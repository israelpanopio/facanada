import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll'
import styled from 'styled-components'



const TableContents = ({post}) => {
    const [openTable, setOpenTable] = useState(false);
    console.log(post.content4);

  return (<>
    <TableIcon onClick={(() => setOpenTable(!openTable))}>
       {openTable ? <h6 ><FaBars /> On this page</h6> : <p><br /><u><FaBars /> See table of contents</u></p>}
    </TableIcon>
      <TableOfContens openTable={openTable}>
      <ul style={{margin:"0"}}>
          <li><LinkS to="intro" smooth={true} duration={500} spy={true} exact='true' offset={-80}><h6 style={{margin:"0"}}>{post.title}</h6></LinkS></li>
          <ul>
            {post.content1 ? <li><LinkS to="one" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{post.content1.raw.children[0].children[0].text}</LinkS></li> : ''}
            {post.content2 ? <li><LinkS to="two" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{post.content2.raw.children[0].children[0].text}</LinkS></li> : ''}
            {post.content3 ? <li><LinkS to="three" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{post.content3.raw.children[0].children[0].text}</LinkS></li> : ''}
            {post.content4 ? <li><LinkS to="four" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{post.content4.raw.children[0].children[0].text}</LinkS></li> : ''}
            {post.content5 ? <li><LinkS to="five" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{post.content5.raw.children[0].children[0].text}</LinkS></li> : ''}
          </ul>
        </ul>
      </TableOfContens>
  </>)
}

export default TableContents


const TableIcon = styled.div`
    display: inline-block;
    ${'' /* transform: translate(-100%, 25%); */}
    cursor: pointer;
    margin: 0;
`

const TableOfContens = styled.div`
  display: ${({ openTable }) => (openTable ? 'block' : 'none')};
  margin-top:0;
`

const LinkS = styled(Link)`
  cursor: pointer;
`