import React, {useState} from 'react'
import Info from '../components/Info'
import Timeline from '../components/Timeline'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
// import background from '../images/bg_9.png'
import background from '../images/bg_svg.svg'
import Outreach from '../components/Outreach'
import Team from '../components/Team'
// import { Parallax } from 'react-scroll-parallax'
// import { useParallax } from 'react-scroll-parallax'

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

  // const { ref } = useParallax({ speed: 20 });

  return (
    <>
    {/* <Parallax speed={-20}> */}
      <div style={{backgroundImage: `url(${background})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    // backgroundSize: '250px', 
                    }}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/* <Parallax speed={+20}> */}
      <Container> 
        <Navbar toggle={toggle}/>
          <Info/>
          <Timeline />
          <Outreach />
          <Team/>
      </Container>
      {/* </Parallax>  */}
      </div>
    {/* </Parallax> */}
          
    </>
  )
}

export default Home
