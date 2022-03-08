import React, {useState} from 'react'
import Info from '../components/Info'
import Timeline from '../components/Timeline'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import Outreach from '../components/Outreach'
import Team from '../components/Team'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
          <Info/>
          <Timeline />
          <Outreach />
          <Team/>
    </>
  )
}

export default Home
