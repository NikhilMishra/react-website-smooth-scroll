import React, {useState} from 'react'
import Info from '../components/Info'
import Timeline from '../components/Timeline'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import background from '../images/bg_9.png'
import Outreach from '../components/Outreach'
import Team from '../components/Team'

import styled from 'styled-components';

export const Container = styled.div`
  // color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 1225px;
  margin: auto;
  //background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
  // background-color: blue;

  @media screen and  (max-width: 1361px) {
    // padding: 100px 0;
    // height: 460px;
    margin: auto;
    width: 90%;
  }
`

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div style={{backgroundImage: `url(${background})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    // backgroundSize: '250px', 
                    }}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Container> 
        <Navbar toggle={toggle}/>
          <Info/>
          <Timeline />
          <Outreach />
          <Team/>
      </Container>
      </div>
          
    </>
  )
}

export default Home
