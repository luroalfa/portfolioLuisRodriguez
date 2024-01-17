import React, { useState } from "react";
import {
  Container,
  Logo,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
  Wrapper,
  NavText,
} from "./Styles/NavbarElements";
import {
  FaBars,
  FaTimes,
  FaPenNib,
  FaAddressCard,
  FaBlog,
  FaUserTie,
  FaHandshake ,
} from "react-icons/fa";
import { IconContext } from "react-icons";

// Componente NavItem para reducir la repetición
const NavItem = ({ to, icon, children, onClick }) => (
  <MenuItem>
    <MenuItemLink to={to} onClick={onClick}>
      <div>
        {icon}
        {children}
      </div>
    </MenuItemLink>
  </MenuItem>
);

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => setShowMobileMenu(prev => !prev); // Función para alternar el menú

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "1.5em" } }}>
          <LogoContainer to="/">
            <Logo src="../img/yovector.svg" alt="Logo" />
            <NavText>Luis</NavText>
            <NavText>Rodríguez</NavText>
          </LogoContainer>

          <MobileIcon onClick={toggleMenu}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <NavItem to="/" icon={<FaUserTie />} onClick={toggleMenu}>About Me</NavItem>
            <NavItem to="/blog" icon={<FaBlog />} onClick={toggleMenu}>Blog</NavItem>
            <NavItem to="/portfolio" icon={<FaPenNib />} onClick={toggleMenu}>Portfolio</NavItem>
            <NavItem to="/collaborate" icon={<FaHandshake />} onClick={toggleMenu}>Let's Team Up!</NavItem>
            <NavItem to="/contact" icon={<FaAddressCard />} onClick={toggleMenu}>Contact</NavItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
