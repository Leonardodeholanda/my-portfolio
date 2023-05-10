import React, { useState} from 'react'
import { Home } from "../../containers/Home"
import { About } from "../../containers/About"
import { Projects } from "../../containers/Projects"
import { Knowledge } from "../../containers/Knowledge"
import { Contact } from "../../containers/Contact"
import { Container } from './styles'

import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CodeIcon from '@mui/icons-material/Code'
import SchoolIcon from '@mui/icons-material/School'
import LinkIcon from '@mui/icons-material/Link';

export function SideMenu() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <Container>
        <ul>
        <li onClick={() => handlePageChange('Home')}><HomeIcon />Home</li>
        <li onClick={() => handlePageChange('About')}><InfoIcon />About</li>
        <li onClick={() => handlePageChange('Projects')}><CodeIcon />Projects</li>
        <li onClick={() => handlePageChange('Knowledge')}><SchoolIcon />Knowledge</li>
        <li onClick={() => handlePageChange('Contact')}><LinkIcon />Contact</li>
      </ul>
      <div>
        {currentPage === 'Home' && <Home />}
        {currentPage === 'About' && <About />}
        {currentPage === 'Projects' && <Projects />}
        {currentPage === 'Knowledge' && <Knowledge />}
        {currentPage === 'Contact' && <Contact />}
      </div>
    </Container>
  )
}