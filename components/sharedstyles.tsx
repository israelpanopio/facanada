import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  max-width: 1200px;
  margin: auto auto auto auto;

@media  screen and (max-width: 1200px) {
    max-width: 95%;
}
`
export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin: auto;
`

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
  text-decoration: none;
  
`

export const Description = styled.p`
  text-align: center;
  font-size: 1rem;
`

// Body------------------------------------
export const Body = styled.div`
display: grid;
grid-template-columns: 5fr 2fr;
width: 100%;
height: 100%;
padding: 0;
margin: 0;


@media screen and (max-width: 900px) {
grid-template-columns: 1fr;
}
`
export const Col = styled.div`
max-width: 99%;
display: inline;
margin-left:0;
padding-left:0;
`

export const AuthorDiv = styled.div`
`
 export const Author = styled.p`
 background-color: white;
 opacity: 80%;
 font-size: 13px;
 margin: auto; 
 padding: 2px 6px 0 6px;
 float:right;
 `

//Page--------------------

export const Row = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

@media screen and (max-width: 1158px) {
    max-width: 99%;
    margin: auto;
}

@media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
}
`

export const TogglePageRight = styled.div`
  text-align: right;
  font-size:18px;
  height: 30px;
`
export const TogglePageLeft = styled.div`
  text-align: Left;
  font-size:18px;
  height: 30px;
`

//Sidebar---------------------------------
export const SidebarNav = styled.nav`
    position: sticky;
    top: 80px;
    z-index: 5;
`

