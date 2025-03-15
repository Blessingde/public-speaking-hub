import "./css/navbar.css";
// import Button from "./button";
const NavBar = () => {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo">
            <img src="/logo .png" alt="logo" width={150} height={43} />
          </div>
          <div className="text">
            <a href="Events">EVENTS</a>
            <a href="About">ABOUT</a>
            <a href="/public-speaking-hub/public-speaking-hub/src/pages/contact/contact.jsx">
              CONTACTS
            </a>
            <a href="Pricing"> PRICING</a>
          </div>
        </div>
        {/* <Button /> */}
      </nav>
    </>
  );
};

export default NavBar;
