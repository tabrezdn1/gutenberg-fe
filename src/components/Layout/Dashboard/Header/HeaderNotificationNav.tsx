import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, IconDefinition } from '@fortawesome/free-regular-svg-icons'
import {
  faBasketShopping,
  faChartBar,
  faGaugeHigh,
  faList,
  faUserMinus,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import {
  Badge,
  Dropdown, DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  ProgressBar,
} from 'react-bootstrap'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import Image from 'next/image'
import HeaderLocale from '@/components/Layout/Dashboard/Header/HeaderLocale'
import { getDictionary, getLocale } from '@/locales/dictionary'
import HeaderTheme from '@/components/Layout/Dashboard/Header/HeaderTheme'
import { getPreferredTheme } from '@/themes/theme'

type ItemWithIconProps = {
  icon: IconDefinition;
} & PropsWithChildren

const ItemWithIcon = (props: ItemWithIconProps) => {
  const { icon, children } = props

  return (
    <>
      <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
      {children}
    </>
  )
}

export default async function HeaderNotificationNav() {
  const dict = await getDictionary()
  return (
    <Nav>
      <NavItem className="d-none d-sm-block">
        <Dropdown>
          <DropdownToggle className="px-2 mx-1 px-sm-3 mx-sm-0" as={NavLink} bsPrefix="hide-caret" id="dropdown-notification">
            <FontAwesomeIcon icon={faBell} size="lg" />
            <Badge pill bg="danger" className="position-absolute top-0 end-0 px-1 px-sm-2">
              2
            </Badge>
          </DropdownToggle>
          <DropdownMenu className="pt-0" align="end">
            <DropdownHeader className="fw-bold rounded-top">{dict.notification.message.replace('{{total}}', '2')}</DropdownHeader>
            <DropdownHeader className="fw-bold">Events in Progress</DropdownHeader>

            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <small><div className="text-uppercase"><b>Event: PDF documents</b></div></small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="primary"
                  now={25}
                />
                <small>
                  <div className="text-muted">
                    25 pages / 100 pages
                  </div>
                </small>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <small><div className="text-uppercase"><b>Event: Github repo</b></div></small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="warning"
                  now={75}
                />
                <small>
                  <div className="text-muted">11 commits / 16 commits</div>
                </small>
              </DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </NavItem>
      <NavItem>
        <HeaderLocale currentLocale={getLocale()} />
      </NavItem>
      <NavItem>
        <HeaderTheme currentPreferredTheme={getPreferredTheme()} />
      </NavItem>
    </Nav>
  )
}
