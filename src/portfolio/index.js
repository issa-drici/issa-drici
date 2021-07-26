import React, { useState } from 'react'
import './style.scss'

import Introduction from './Component/Introduction'
import AboutMe from './Component/AboutMe'
import MyProjects from './Component/MyProjects'
import Header from './Component/Header'
import Contact from './Component/Contact'


const Home = () => {
  const [page, setPage] = useState("introduction")
  const [viewContact, setViewContact] = useState(false)

  function pageView(page) {
    if (page === "introduction") {
      return <Introduction clickPage={() => setPage("myprojects")} contact={() => setViewContact("true")} />
    } else if (page === "aboutme") {
      return <AboutMe contact={() => setViewContact("true")} />
    } else if (page === "myprojects") {
      return <MyProjects />
    }
  }

  const handleClickPage = page => {
    setPage(page)
  }

  return (
    
    <div className="portfolio">
      <Header active={page} clickPage={handleClickPage} contact={() => setViewContact("true")} />
      {pageView(page)}
      {viewContact ? <Contact closeContact={() => setViewContact(false)} /> : null}
    </div>
  )
}

export default Home
