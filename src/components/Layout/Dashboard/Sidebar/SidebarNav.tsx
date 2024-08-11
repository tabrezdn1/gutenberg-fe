import {
  faAddressCard, faBell, faFileLines, faStar,
} from '@fortawesome/free-regular-svg-icons'
import {
  faBug,
  faCalculator,
  faChartPie,
  faCode,
  faDroplet,
  faGauge,
  faLayerGroup,
  faLocationArrow,
  faPencil,
  faPuzzlePiece,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons'
import React, { PropsWithChildren } from 'react'
import { Badge } from 'react-bootstrap'
import SidebarNavGroup from '@/components/Layout/Dashboard/Sidebar/SidebarNavGroup'
import SidebarNavItem from '@/components/Layout/Dashboard/Sidebar/SidebarNavItem'
import { getDictionary } from '@/locales/dictionary'

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
  )
}

export default async function SidebarNav() {
  const dict = await getDictionary()
  return (
    <ul className="list-unstyled">
      <SidebarNavItem icon={faGauge} href="/">
        {dict.sidebar.items.dashboard}
        <small className="ms-auto"><Badge bg="info" className="ms-auto">Update</Badge></small>
      </SidebarNavItem>
      <SidebarNavItem icon={faCode} href="/pokemons">
        {dict.sidebar.items.workflows}
        <small className="ms-auto"><Badge bg="danger" className="ms-auto">Limited use</Badge></small>
      </SidebarNavItem>
      <SidebarNavTitle>
        {/* {dict.sidebar.items.components}  */}
        Analytics
      </SidebarNavTitle>

      {/* <SidebarNavGroup toggleIcon={faPuzzlePiece} toggleText={dict.sidebar.items.base}>
        <SidebarNavItem href="#">{dict.sidebar.items.accordion}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.breadcrumb}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.cards}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.carousel}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.collapse}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.list_group}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.navs}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.pagination}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.popovers}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.progress}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.scrollspy}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.spinners}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.tables}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.tabs}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.tooltips}</SidebarNavItem>
      </SidebarNavGroup> */}

      <SidebarNavGroup toggleIcon={faLocationArrow} toggleText="Events">
        <SidebarNavItem icon={faRightToBracket} href="#">In Progress</SidebarNavItem>
        <SidebarNavItem icon={faLayerGroup} href="#">Completed</SidebarNavItem>
        <SidebarNavItem icon={faBug} href="#">Failed</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={faFileLines} toggleText="My Documents">
        <SidebarNavItem href="#">PDF</SidebarNavItem>
        <SidebarNavItem href="#">PPT</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={faBell} toggleText={dict.sidebar.items.notifications}>
        <SidebarNavItem href="#">{dict.sidebar.items.alerts}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavItem icon={faCalculator} href="#">
        {/* {dict.sidebar.items.widgets} */}
        Summary
        <small className="ms-auto"><Badge bg="info">NEW</Badge></small>
      </SidebarNavItem>

      <SidebarNavTitle>{dict.sidebar.items.extras}</SidebarNavTitle>

      {/* <SidebarNavGroup toggleIcon={faStar} toggleText={dict.sidebar.items.pages}>
        <SidebarNavItem icon={faRightToBracket} href="login">{dict.sidebar.items.login}</SidebarNavItem>
        <SidebarNavItem icon={faAddressCard} href="register">{dict.sidebar.items.register}</SidebarNavItem>
        <SidebarNavItem icon={faBug} href="#">{dict.sidebar.items.error404}</SidebarNavItem>
        <SidebarNavItem icon={faBug} href="#">{dict.sidebar.items.error500}</SidebarNavItem>
      </SidebarNavGroup> */}

      <SidebarNavItem icon={faFileLines} href="#">API Docs</SidebarNavItem>
      <SidebarNavItem icon={faLayerGroup} href="/purchase/pro">Try Premium</SidebarNavItem>
    </ul>
  )
}
