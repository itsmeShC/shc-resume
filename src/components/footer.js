import Logo from "../noobtodev-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="foo-des">
        <span className="f-hero">
          <a href="https://noobtodev.com/explore">
            <img src={Logo} height={50} width={120} alt="NoobtoDev logo" />
          </a>
          <span style={{ marginLeft: "20px", fontFamily: "Dancing Script" }}>
            Resume Builder &nbsp; 2022 ❤️
          </span>
        </span>
      </div>
    </footer>
  );
}
