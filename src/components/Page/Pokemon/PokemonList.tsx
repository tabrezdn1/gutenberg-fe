import {
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table, ProgressBar,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Pokemon } from '@/models/pokemon'
import THSort from '@/components/TableSort/THSort'
import PokemonTypeLabel from '@/components/Page/Pokemon/PokemonTypeLabel'
import useDictionary from '@/locales/dictionary-hook'
import {
  faArrowDown,
  faArrowUp,
  faDownload,
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from '@fortawesome/free-solid-svg-icons'

import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

type Props = {
  pokemons: Pokemon[];
}

export default function PokemonList(props: Props) {
  const { pokemons } = props
  const dict = useDictionary()

  return (
    <>
      <div className="table-responsive">
        <table className="table border mb-0">
          <thead className="fw-semibold">
            <tr className="align-middle table-light dark:table-dark">
              <th className="text-center" aria-label="icon">
                <FontAwesomeIcon icon={faUsers} fixedWidth />
              </th>
              <th>{dict.dashboard.listing.headers.header1}</th>
              <th>{dict.dashboard.listing.headers.header2}</th>
              {/* <th className="text-center">{dict.dashboard.listing.headers.header3}</th> */}
              <th>{dict.dashboard.listing.headers.header4}</th>
              <th aria-label="Action" />
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <td className="text-center">
                <div className="avatar avatar-md d-inline-flex position-relative">
                  <Image
                    fill
                    sizes="40px"
                    className="rounded-circle"
                    src="/assets/img/avatars/1.jpg"
                    alt="user@email.com"
                  />
                  <span
                    className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                  />
                </div>
              </td>
              <td>
                <div>{dict.dashboard.listing.items.item1.name}</div>
                <div className="small text-black-50 dark:text-gray-500">
                  <span>{dict.dashboard.listing.user_status.new}</span>
                  {' '}
                  |
                  {' '}
                  {dict.dashboard.listing.registered}
                  :
                  {' '}
                  {dict.dashboard.listing.registered_at}
                </div>
              </td>
              <td>
                <div className="clearfix">
                  <div className="float-start">
                    <div className="fw-semibold">50%</div>
                  </div>
                  <div className="float-end">
                    <small className="text-black-50 dark:text-gray-500">
                      {dict.dashboard.listing.usage_duration}
                    </small>
                  </div>
                </div>
                <ProgressBar className="progress-thin" variant="success" now={50} />
              </td>
              {/* <td className="text-center" aria-label="icon">
                <FontAwesomeIcon icon={faCcAmex} size="lg" fixedWidth />
              </td> */}
              <td>
                <div className="small text-black-50 dark:text-gray-500">{dict.dashboard.listing.last_login}</div>
                <div className="fw-semibold">{dict.dashboard.listing.items.item1.login_at}</div>
              </td>
              <td>
                <Dropdown align="end">
                  <DropdownToggle
                    as="button"
                    bsPrefix="btn"
                    className="btn-link rounded-0 text-black-50 dark:text-gray-500 shadow-none p-0"
                    id="action-user1"
                  >
                    <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                  </DropdownToggle>

                  <DropdownMenu>
                    <DropdownItem href="#/action-1">{dict.action.info}</DropdownItem>
                    <DropdownItem href="#/action-2">{dict.action.edit}</DropdownItem>
                    <DropdownItem
                      className="text-danger"
                      href="#/action-3"
                    >
                      {dict.action.delete}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </td>
            </tr>
            <tr className="align-middle">
              <td className="text-center">
                <div className="avatar avatar-md d-inline-flex position-relative">
                  <Image
                    fill
                    sizes="40px"
                    className="rounded-circle"
                    src="/assets/img/avatars/2.jpg"
                    alt="user@email.com"
                  />
                  <span
                    className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white"
                  />
                </div>
              </td>
              <td>
                <div>{dict.dashboard.listing.items.item2.name}</div>
                <div className="small text-black-50 dark:text-gray-500">
                  <span>{dict.dashboard.listing.user_status.recurring}</span>
                  {' '}
                  |
                  {' '}
                  {dict.dashboard.listing.registered}
                  :
                  {' '}
                  {dict.dashboard.listing.registered_at}
                </div>
              </td>
              <td>
                <div className="clearfix">
                  <div className="float-start">
                    <div className="fw-semibold">10%</div>
                  </div>
                  <div className="float-end">
                    <small className="text-black-50 dark:text-gray-500">
                      {dict.dashboard.listing.usage_duration}
                    </small>
                  </div>
                </div>
                <ProgressBar className="progress-thin" variant="info" now={10} />
              </td>
              {/* <td className="text-center" aria-label="icon">
                <FontAwesomeIcon icon={faCcVisa} size="lg" fixedWidth />
              </td> */}
              <td>
                <div className="small text-black-50 dark:text-gray-500">{dict.dashboard.listing.last_login}</div>
                <div className="fw-semibold">{dict.dashboard.listing.items.item2.login_at}</div>
              </td>
              <td>
                <Dropdown align="end">
                  <DropdownToggle
                    as="button"
                    bsPrefix="btn"
                    className="btn-link rounded-0 text-black-50 dark:text-gray-500 shadow-none p-0"
                    id="action-user2"
                  >
                    <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                  </DropdownToggle>

                  <DropdownMenu>
                    <DropdownItem href="#/action-1">{dict.action.info}</DropdownItem>
                    <DropdownItem href="#/action-2">{dict.action.edit}</DropdownItem>
                    <DropdownItem
                      className="text-danger"
                      href="#/action-3"
                    >
                      {dict.action.delete}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </td>
            </tr>
            <tr className="align-middle">
              <td className="text-center">
                <div className="avatar avatar-md d-inline-flex position-relative">
                  <Image
                    fill
                    sizes="40px"
                    className="rounded-circle"
                    src="/assets/img/avatars/3.jpg"
                    alt="user@email.com"
                  />
                  <span
                    className="avatar-status position-absolute d-block bottom-0 end-0 bg-warning rounded-circle border border-white"
                  />
                </div>
              </td>
              <td>
                <div>{dict.dashboard.listing.items.item3.name}</div>
                <div className="small text-black-50 dark:text-gray-500">
                  <span>{dict.dashboard.listing.user_status.new}</span>
                  {' '}
                  |
                  {' '}
                  {dict.dashboard.listing.registered}
                  :
                  {' '}
                  {dict.dashboard.listing.registered_at}
                </div>
              </td>
              <td>
                <div className="clearfix">
                  <div className="float-start">
                    <div className="fw-semibold">74%</div>
                  </div>
                  <div className="float-end">
                    <small className="text-black-50 dark:text-gray-500">
                      {dict.dashboard.listing.usage_duration}
                    </small>
                  </div>
                </div>
                <ProgressBar className="progress-thin" variant="warning" now={74} />
              </td>
              {/* <td className="text-center" aria-label="icon">
                <FontAwesomeIcon icon={faCcStripe} size="lg" fixedWidth />
              </td> */}
              <td>
                <div className="small text-black-50 dark:text-gray-500">{dict.dashboard.listing.last_login}</div>
                <div className="fw-semibold">{dict.dashboard.listing.items.item3.login_at}</div>
              </td>
              <td>
                <Dropdown align="end">
                  <DropdownToggle
                    as="button"
                    bsPrefix="btn"
                    className="btn-link rounded-0 text-black-50 dark:text-gray-500 shadow-none p-0"
                    id="action-user3"
                  >
                    <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                  </DropdownToggle>

                  <DropdownMenu>
                    <DropdownItem href="#/action-1">{dict.action.info}</DropdownItem>
                    <DropdownItem href="#/action-2">{dict.action.edit}</DropdownItem>
                    <DropdownItem
                      className="text-danger"
                      href="#/action-3"
                    >
                      {dict.action.delete}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </td>
            </tr>
            <tr className="align-middle">
              <td className="text-center">
                <div className="avatar avatar-md d-inline-flex position-relative">
                  <Image
                    fill
                    sizes="40px"
                    className="rounded-circle"
                    src="/assets/img/avatars/4.jpg"
                    alt="user@email.com"
                  />
                  <span
                    className="avatar-status position-absolute d-block bottom-0 end-0 bg-secondary rounded-circle border border-white"
                  />
                </div>
              </td>
              <td>
                <div>{dict.dashboard.listing.items.item4.name}</div>
                <div className="small text-black-50 dark:text-gray-500">
                  <span>{dict.dashboard.listing.user_status.new}</span>
                  {' '}
                  |
                  {' '}
                  {dict.dashboard.listing.registered}
                  :
                  {' '}
                  {dict.dashboard.listing.registered_at}
                </div>
              </td>
              <td>
                <div className="clearfix">
                  <div className="float-start">
                    <div className="fw-semibold">98%</div>
                  </div>
                  <div className="float-end">
                    <small className="text-black-50 dark:text-gray-500">
                      {dict.dashboard.listing.usage_duration}
                    </small>
                  </div>
                </div>
                <ProgressBar className="progress-thin" variant="danger" now={98} />
              </td>
              {/* <td className="text-center" aria-label="icon">
                <FontAwesomeIcon icon={faCcPaypal} size="lg" fixedWidth />
              </td> */}
              <td>
                <div className="small text-black-50 dark:text-gray-500">{dict.dashboard.listing.last_login}</div>
                <div className="fw-semibold">{dict.dashboard.listing.items.item4.login_at}</div>
              </td>
              <td>
                <Dropdown align="end">
                  <DropdownToggle
                    as="button"
                    bsPrefix="btn"
                    className="btn-link rounded-0 text-black-50 dark:text-gray-500 shadow-none p-0"
                    id="action-user4"
                  >
                    <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                  </DropdownToggle>

                  <DropdownMenu>
                    <DropdownItem href="#/action-1">{dict.action.info}</DropdownItem>
                    <DropdownItem href="#/action-2">{dict.action.edit}</DropdownItem>
                    <DropdownItem
                      className="text-danger"
                      href="#/action-3"
                    >
                      {dict.action.delete}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </td>
            </tr>
            <tr className="align-middle">
              <td className="text-center">
                <div className="avatar avatar-md d-inline-flex position-relative">
                  <Image
                    fill
                    sizes="40px"
                    className="rounded-circle"
                    src="/assets/img/avatars/5.jpg"
                    alt="user@email.com"
                  />
                  <span
                    className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                  />
                </div>
              </td>
              <td>
                <div>{dict.dashboard.listing.items.item5.name}</div>
                <div className="small text-black-50 dark:text-gray-500">
                  <span>{dict.dashboard.listing.user_status.new}</span>
                  {' '}
                  |
                  {' '}
                  {dict.dashboard.listing.registered}
                  :
                  {' '}
                  {dict.dashboard.listing.registered_at}
                </div>
              </td>
              <td>
                <div className="clearfix">
                  <div className="float-start">
                    <div className="fw-semibold">22%</div>
                  </div>
                  <div className="float-end">
                    <small className="text-black-50 dark:text-gray-500">
                      {dict.dashboard.listing.usage_duration}
                    </small>
                  </div>
                </div>
                <ProgressBar className="progress-thin" variant="info" now={22} />
              </td>
              {/* <td className="text-center" aria-label="icon">
                <FontAwesomeIcon icon={faCcApplePay} size="lg" fixedWidth />
              </td> */}
              <td>
                <div className="small text-black-50 dark:text-gray-500">{dict.dashboard.listing.last_login}</div>
                <div className="fw-semibold">{dict.dashboard.listing.items.item5.login_at}</div>
              </td>
              <td>
                <Dropdown align="end">
                  <DropdownToggle
                    as="button"
                    bsPrefix="btn"
                    className="btn-link rounded-0 text-black-50 dark:text-gray-500 shadow-none p-0"
                    id="action-user5"
                  >
                    <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                  </DropdownToggle>

                  <DropdownMenu>
                    <DropdownItem href="#/action-1">{dict.action.info}</DropdownItem>
                    <DropdownItem href="#/action-2">{dict.action.edit}</DropdownItem>
                    <DropdownItem
                      className="text-danger"
                      href="#/action-3"
                    >
                      {dict.action.delete}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </td>
            </tr>
            <tr className="align-middle">
              <td className="text-center">
                <div className="avatar avatar-md d-inline-flex position-relative">
                  <Image
                    fill
                    sizes="40px"
                    className="rounded-circle"
                    src="/assets/img/avatars/6.jpg"
                    alt="user@email.com"
                  />
                  <span
                    className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white"
                  />
                </div>
              </td>
              <td>
                <div>{dict.dashboard.listing.items.item6.name}</div>
                <div className="small text-black-50 dark:text-gray-500">
                  <span>{dict.dashboard.listing.user_status.new}</span>
                  {' '}
                  |
                  {' '}
                  {dict.dashboard.listing.registered}
                  :
                  {' '}
                  {dict.dashboard.listing.registered_at}
                </div>
              </td>
              <td>
                <div className="clearfix">
                  <div className="float-start">
                    <div className="fw-semibold">43%</div>
                  </div>
                  <div className="float-end">
                    <small className="text-black-50 dark:text-gray-500">
                      {dict.dashboard.listing.usage_duration}
                    </small>
                  </div>
                </div>
                <ProgressBar className="progress-thin" variant="success" now={43} />
              </td>
              {/* <td className="text-center" aria-label="icon">
                <FontAwesomeIcon icon={faCcAmex} size="lg" fixedWidth />
              </td> */}
              <td>
                <div className="small text-black-50 dark:text-gray-500">{dict.dashboard.listing.last_login}</div>
                <div className="fw-semibold">{dict.dashboard.listing.items.item6.login_at}</div>
              </td>
              <td>
                <Dropdown align="end">
                  <DropdownToggle
                    as="button"
                    bsPrefix="btn"
                    className="btn-link rounded-0 text-black-50 dark:text-gray-500 shadow-none p-0"
                    id="action-user6"
                  >
                    <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                  </DropdownToggle>

                  <DropdownMenu>
                    <DropdownItem href="#/action-1">{dict.action.info}</DropdownItem>
                    <DropdownItem href="#/action-2">{dict.action.edit}</DropdownItem>
                    <DropdownItem
                      className="text-danger"
                      href="#/action-3"
                    >
                      {dict.action.delete}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <Table responsive bordered hover>
        <thead>
          <tr className="table-light dark:table-dark">
            <th><THSort name="id">#</THSort></th>

            <th aria-label="Photo" />
            
            <th><THSort name="name">{dict.pokemons.attribute.name}</THSort></th>
            <th>{dict.pokemons.attribute.type}</th>
            <th className="text-center">{dict.pokemons.attribute.egg_group}</th>
            <th className="text-end"><THSort name="hp">{dict.pokemons.attribute.hp}</THSort></th>


            <th className="text-end"><THSort name="attack">{dict.pokemons.attribute.attack}</THSort></th>
            <th className="text-end"><THSort name="defense">{dict.pokemons.attribute.defense}</THSort></th>
            <th className="text-end"><THSort name="special_attack">{dict.pokemons.attribute.sp_attack}</THSort></th>
            <th className="text-end"><THSort name="special_defense">{dict.pokemons.attribute.sp_defense}</THSort></th>
            <th className="text-end"><THSort name="speed">{dict.pokemons.attribute.speed}</THSort></th>
            <th className="text-end"><THSort name="total">{dict.pokemons.attribute.total}</THSort></th>



            <th aria-label="Action" />
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => (
            <tr key={pokemon.id}>
              <td>{pokemon.id}</td>
              
              <td>
                <div className="position-relative mx-auto" style={{ width: '70px', height: '70px' }}>
                  <Image
                    fill
                    style={{ objectFit: 'contain' }}
                    alt={pokemon.pokemondb_identifier}
                    sizes="5vw"
                    src={`https://img.pokemondb.net/sprites/home/normal/2x/${pokemon.pokemondb_identifier}.jpg`}
                  />
                </div>
              </td>
              
              <td>{pokemon.name}</td>
              <td>
                {pokemon.types.map((type) => (
                  <span key={type.id} className="me-2"><PokemonTypeLabel type={type} /></span>
                ))}
              </td>
              <td className="text-center" style={{ whiteSpace: 'pre' }}>
                {pokemon.egg_groups.map((eggGroup) => eggGroup.name).join('\n')}
              </td>
              <td className="text-end">{pokemon.hp}</td>

              <td className="text-end">{pokemon.attack}</td>
              <td className="text-end">{pokemon.defense}</td>
              <td className="text-end">{pokemon.special_attack}</td>
              <td className="text-end">{pokemon.special_defense}</td>
              <td className="text-end">{pokemon.speed}</td>
              <td className="text-end">{pokemon.total}</td>

              <td>
                <Dropdown align="end">
                  <DropdownToggle
                    as="button"
                    bsPrefix="btn"
                    className="btn-link rounded-0 text-black-50 dark:text-gray-500 shadow-none p-0"
                    id={`action-${pokemon.id}`}
                  >
                    <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                  </DropdownToggle>

                  <DropdownMenu>
                    <DropdownItem href="#/action-1">{dict.action.info}</DropdownItem>
                    <Link href={`pokemons/${pokemon.id}/edit`} passHref legacyBehavior>
                      <DropdownItem>View</DropdownItem>
                    </Link>
                    <Link href={`pokemons/${pokemon.id}/edit`} passHref legacyBehavior>
                      <DropdownItem>{dict.action.edit}</DropdownItem>
                    </Link>
                    <DropdownItem
                      className="text-danger"
                      href="#/action-3"
                    >
                      {dict.action.delete}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </>

  )
}
