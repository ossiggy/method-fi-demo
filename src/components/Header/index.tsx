import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
  return (
    <Navbar
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src={require("../../assets/methodfi_logo.jpeg")}
        style={{
          height: 40,
          width: 40
        }}
      />
    </NavbarBrand>
  </Navbar>
  )
}

export default Header;