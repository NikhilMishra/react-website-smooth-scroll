import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Info from '../components/Info'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/SideBar'
import background from '../images/background_test_5.png'

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
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <Services />
      <Info {...homeObjThree}/>
      <Footer />
      </div>
    </>
  )
}

export default Home
