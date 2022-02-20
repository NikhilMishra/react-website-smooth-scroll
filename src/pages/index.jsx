import React, {useState} from 'react'
import Info from '../components/Info'
import Timeline from '../components/Timeline'
import { homeObjOne} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import background from '../images/background_test_5.png'
import Outreach from '../components/Outreach'
import Team from '../components/Team'

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
      <Navbar toggle={toggle}/>
      <Info {...homeObjOne} />
          <Timeline />
          <Outreach />
          <Team/>
      </div>
          
    </>
  )
}

export default Home
