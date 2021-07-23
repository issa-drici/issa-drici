import React, { useState } from 'react'
import './style.scss'

import Introduction from './Component/Introduction'
import AboutMe from './Component/AboutMe'
import MyProjects from './Component/MyProjects'
import Header from './Component/Header'


const Home = () => {
  const [page, setPage] = useState("introduction")

  function pageView(page) {
    if (page === "introduction") {
      return <Introduction />
    } else if (page === "aboutme") {
      return <AboutMe />
    } else if (page === "myprojects") {
      return <MyProjects />
    }
  }

  const handleClickPage = page => {
    setPage(page)
  }

  return (
    
    <div className="portfolio">
      <Header active={page} clickPage={handleClickPage} />
      {pageView(page)}
    </div>
  )
}

export default Home
