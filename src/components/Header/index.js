import React, { Component } from 'react'
import LogoString from './LogoString'
import styled from 'styled-components'
import { Flex } from 'components/UI/Base'
import Link from 'gatsby-link'
import { Menu as MenuIcon } from 'styled-icons/Feather'

const StyledHeader = styled(Flex)`
  position: fixed;
  z-index: 200000;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background: #013760;
`;

const StyledMenuIcon = MenuIcon.extend`
  color: white;
  position: absolute;
  padding: 10px;
  top: 10px;
  right: 5px;
  cursor: pointer;
  border-radius: 35px;
  transition: all 0.3s ease-in-out;

  &:hover {
    -background: rgba(0,0,0,.8);
  }

  &.active {
    background: rgba(0,0,0,.8);
  }
`

const StyledMainLogo = styled('img') `
    width: auto;
    height: 100%;
`

const StyledGatsbyLink = styled(Link)`
	color: white;
	text-decoration: none;
`

const AnimatedDiv = styled(Flex) `
  width: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  transition: width 0.3s ease-in-out;
  flex-direction: column;
  position: fixed;
  top: 70px;
  right: 0;
  bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  padding: 20px 0;

  a {
    cursor:pointer;
    width: 100%;
    display: block;
    color: #fff;
    padding: 10px 20px;
  }

  &.open {
    width: 240px;
  }
`

const Menu = ({open}) => (
  <AnimatedDiv className={open ? 'open' : ''}>
    <StyledGatsbyLink to="/">Hem</StyledGatsbyLink>
    <StyledGatsbyLink to="/jobb">Se alla jobb</StyledGatsbyLink>
    <StyledGatsbyLink to="/foretag">Hitta företag</StyledGatsbyLink>
    <StyledGatsbyLink to="/leva-och-bo-i-kalmar">Livet i Kalmar</StyledGatsbyLink>
    <StyledGatsbyLink to="/om-it-jobb-i-kalmar">Om sidan</StyledGatsbyLink>
  </AnimatedDiv>
)

class Header extends Component {
  state = {
    renderMenu: false
  }

  goToHome = () => {
    console.log('????')
    window.location.assign(window.location.origin)
  }

  toggleMenu = () => {
    this.setState({renderMenu: !this.state.renderMenu})
  }

  render() {
    const { renderMenu } = this.state

    return (
      <StyledHeader>
        <a href="/">
          <StyledMainLogo src={LogoString} />
        </a>

        <StyledMenuIcon
          size={50}
          onClick={this.toggleMenu}
          className={renderMenu ? 'active' : ''}
        />

        <Menu open={renderMenu} />
      </StyledHeader>
    )
  }
}

export default Header
