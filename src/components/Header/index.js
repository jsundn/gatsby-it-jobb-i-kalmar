import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex } from 'components/UI/Base'
import Img from 'gatsby-image'
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

  &:hover {

  }
`

const Menu = () => (
  <Flex>
    Menu
  </Flex>
)

class Header extends Component {
  state = {
    renderMenu: false
  }

  toggleMenu = () => {
    this.setState({renderMenu: !this.state.renderMenu})
  }

  render() {
    const { logo } = this.props
    const { renderMenu } = this.state

    return (
      <StyledHeader>
        <Img fixed={logo.childImageSharp.fixed} />

        <StyledMenuIcon
          size={50}
          onClick={this.toggleMenu}
        />

        { renderMenu && <Menu /> }
      </StyledHeader>
    )
  }
}

export default Header
