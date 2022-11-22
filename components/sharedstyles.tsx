import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  max-width: 1100px;
  margin: auto auto auto auto;

@media  screen and (max-width: 1100px) {
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
grid-template-columns: 3fr 1fr;
width: 100%;


@media screen and (max-width: 900px) {
grid-template-columns: 1fr;
}
`
export const Col = styled.div`
max-width: 99%;
display: inline;
`

export const Author = styled.p`
  font-size: 13px;
  margin: 0px; 
  text-align: right;
  background-color: white;
  opacity: 80%;
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
    margin-top: 3rem;
`

