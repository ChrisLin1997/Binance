import styled from 'styled-components'
import { colors } from '../../assets/style'
import { Link } from 'react-router-dom'

export const MainView = styled.main`
  display: flex;
  margin-top: 64px;
  width: 100%;
  min-height: calc(100vh - 112px);
  background-color: whitesmoke;
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  padding: 0 12px;
  display: flex;
  width: 100%;
  height: 64px;
  align-items: center;
  background: ${ colors.dark };
`
export const Logo = styled.img`
  height: 100%;
  cursor: pointer;
  &:hover {
    opacity: .8;
  }
`

export const NavItem = styled(Link)`
  @media screen and (max-width: 568px) { display: none };
  margin: 0 8px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  &:hover {
    color: ${colors.active};
  }
`

export const ButtonGroup = styled.div`
  @media screen and (max-width: 568px) { display: none; }
  margin-left: auto;
`

export const Button = styled(Link)<{ type?: string }>`
  margin: 0 4px;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  background-color: ${ props => props.type === 'primary' ? colors.active : 'white' };
  cursor: pointer;
  &:hover {
    opacity: .9;
  }
`

export const MenuIcon = styled.img`
  @media screen and (min-width: 568px) { display: none };
  margin-right: 12px;
  margin-left: auto;
  width: auto;
  height: 24px;
`

export const Menu = styled.aside<{ isOpen: boolean }>`
  @media screen and (min-width: 568px) { display: none };
  display: ${ props => props.isOpen ? 'block' : 'none' };
  position: fixed;
  top: 64px;
  right: 0;
  width: 180px;
  color: white;
  text-align: center;
  background-color: ${ colors.gray };
`

export const MenuItem = styled(NavItem)`
  margin: 0;
  padding: 12px 0 ;
  display: block;
  color: white;
  font-size: 18px;
  padding: 12px 0;
  border-bottom: 2px solid ${ colors.dark };
`