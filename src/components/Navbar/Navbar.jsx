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
} from "react-icons/fa";
import { IconContext } from "react-icons";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <Container>
        <Wrapper>
          <IconContext.Provider value={{ style: { fontSize: "1.5em" } }}>
            <LogoContainer to="/">
              <Logo src="../img/yovector.svg" className="logo" alt="" />
              <NavText>Luis</NavText>
              <NavText>Rodríguez</NavText>
            </LogoContainer>

            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <Menu open={showMobileMenu}>
              <MenuItem>
                <MenuItemLink
                  to="/"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <FaUserTie />
                    About me
                  </div>
                </MenuItemLink>
              </MenuItem>

              <MenuItem>
                <MenuItemLink
                  to="/blog"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <FaBlog />
                    Blog
                  </div>
                </MenuItemLink>
              </MenuItem>

              <MenuItem>
                <MenuItemLink
                  to="/portfolio"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <FaPenNib />
                    Portfolio
                  </div>
                </MenuItemLink>
              </MenuItem>

              <MenuItem>
                <MenuItemLink
                  to="/contact"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <FaAddressCard />
                    Contact
                  </div>
                </MenuItemLink>
              </MenuItem>
            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>
    </>
  );
}

export default Navbar;
