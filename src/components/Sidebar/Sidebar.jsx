import React from 'react'
import {Link} from 'react-router-dom'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu,SidebarRoute, SidebarWrapper,} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu to='#'>
        <SidebarRoute to="/" onClick={toggle}>
            Home
          </SidebarRoute>
          <SidebarLink to="home" onClick={toggle}>
            Nosotros
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Servicios
          </SidebarLink>
          <SidebarRoute to="portfolio" onClick={toggle}>
            Proyectos
          </SidebarRoute>
          <SidebarLink to="contacto" onClick={toggle}>
            Contacto
          </SidebarLink>
        </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar