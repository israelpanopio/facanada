import React, { useState, useEffect } from 'react'
import { DesktopAds, GoogleAds, InFeedAds, WidgetCard } from '../components';
import Link from 'next/link'
import { Body, Col, SidebarNav } from '../components/sharedstyles';
import styled from 'styled-components'
import { getRecentPosts, getSearchPosts } from '../services';
import { FaSearch } from 'react-icons/fa';

const search = () => {
    const [keyword, setKeyword] = useState("")
    const [searchKeyword, setSearchKeyword] = useState("")
    const [recentPosts, setRecentPosts] = useState([]);
    const [searchPosts, setSearchPosts] = useState([]);

    useEffect(() => {
          getRecentPosts().then((result) => {
            setRecentPosts(result);
          });
    }, []);

    const searchNow = (keyword) => {
        setSearchKeyword(keyword);
    }

    useEffect(() => {
        if (searchKeyword) {          
            getSearchPosts(searchKeyword).then((result) => {
                setSearchPosts(result);})
            console.log(searchPosts);
        }
    }, [searchKeyword])


      
    // useEffect(() => {
    //     if (searchKeyword) {
    //         getSearchPosts(searchKeyword).then((result) => {
    //             setSearchPosts(result);
    //         });
    //     }
    // }, [searchKeyword]);


  return (<Body>
    <Col><Content>
        <InFeedAds />
        <h2>What are you looking for?</h2>      
        <Form noValidate action="" role="search">
            <Input
            value={keyword}
            onChange={event => setKeyword(event.currentTarget.value)}
            placeholder="Search our website"
            title='Search bar'
            type="text"
            id="keyword"
            name="keyword"
            />
            <Icon keyword={keyword} onClick={searchNow}>
             <FaSearch style={{marginBottom:"-8px"}}/>    
            </Icon>
       </Form>
       Search in: All Categoies
       {searchPosts ? <>
        {searchPosts.map((post, index ) => (
            <h2>{post.title}</h2>
          ))} 
        </> : '' }
        <p style={{marginTop:"-5px", fontSize:"15px"}}>Can't find what you're looking for? <a href="https://www.canada.ca/en/services/immigration-citizenship/search.html?q=&wb-srch-sub=">Click here to search in IRCC website.</a></p>
    </Content></Col>
    <Col>
    <SidebarNav>
        <HideAds><DesktopAds /></HideAds>
        <Sidebar>
            <Comments>
            <div id="fb-root"></div>
            <div className="fb-comments" data-href={`https://www.ph2canada.com/search`} data-width="100%" data-numposts="2"></div>
            </Comments>
          <h2>Recent Posts</h2>
          <Items>
            {recentPosts.map((post, index ) => (
              <WidgetCard key={index} post={post} title={post.title} />
            ))}
            <GoogleAds />
          </Items>
        </Sidebar>
    </SidebarNav>
    </Col>
  </Body>)
}

export default search
  
const Comments = styled.div`
  bottom: 0;
`
const HideAds = styled.div`
    @media screen and (max-width: 900px) {
    display: none;
}
`
const Sidebar = styled.nav`
  margin-top: 0;
  z-index: 5;
  height:  76vh;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (max-width: 900px) {
  overflow: visible;
  }
`
const Items = styled.div`
    overflow: visible;
`

const Input = styled.input`
    width: calc(100% - 100px);
    height: 40px;
    border-radius: 4px 0 0 4px;
    font-size: 20px;
    margin-top: 5px;
`
const Icon = styled.div`
    display: inline-block;
    border: 2px solid black;
    font-size: 1.5rem;
    padding-top: 5px;
    padding-bottom: 0px;
    width: 40px;
    height: 42px;
    font-weight: 400;
    border-radius: 0 4px 4px 0;
    background: #1c578a;
    color: #fff;
    text-align: center;
    opacity: ${({ keyword }) => (keyword ? '100%' : '50%')};
    cursor: ${({ keyword }) => (keyword ? 'pointer' : '')};
`

const Form = styled.form`
    
`

const Content = styled.div`
  @media screen and (max-width: 900px) {
    max-width: 94vw;
    margin: auto auto auto 3vw;
}`