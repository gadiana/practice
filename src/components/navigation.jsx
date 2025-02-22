import "./../styles/navigation.css";
import dogLogo from "./../assets/images/dog-profile.jpg";

export default function Navigation() {
  return (
    <div className="navigation-container">
      <div className="left-section">
        {/* <div className="logo-container">
          <img src={dogLogo} alt="" />
        </div> */}
        <h1 className="logoName">Ezekiel</h1>
      </div>
      <div className="right-section">
        <div className="link-container">
          <a href="#" className="link">
            About Me
          </a>
          <a href="#" className="link">
            Education
          </a>
          <a href="#" className="link">
            Work
          </a>
          <a href="#" className="link">
            Projects
          </a>
          <a href="#" className="link">
            Contact
          </a>
        </div>
      </div>

      <div className="menuContainer">
        <i class='bx bx-menu'></i>
      </div>
    </div>
  );
}
