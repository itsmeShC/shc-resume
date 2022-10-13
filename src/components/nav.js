import Logo from '../noobtodev-logo.png';
const Nav = () => {
    return (
      <header>
        <nav>
          <a href="https://noobtodev.com/explore">
            <div className="logo-sec">
              <img src={Logo} height={84} width={190} alt="NoobtoDev logo" />
            </div>
          </a>
          <div>
            <strong>
              <h1
                className="display-3"
                style={{ marginLeft: "20px", fontFamily: "Dancing Script" }}
              >
                Resume Builder
              </h1>
            </strong>
          </div>
        </nav>
      </header>
    );
}

export default Nav;