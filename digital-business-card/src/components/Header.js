import pic from "../images/pic.jpg";
import linkedin from "../images/linkedin.svg";
import emailLogo from "../images/email.svg";

function Header() {
    return (
        <header className="App-header">
            <nav>
                <img className="profile-pic" src={pic} alt="profile-pic" />
                <h1 className="name-text">Harmeet Matharoo</h1>
                <h4 className="title-text">Fullstack Developer</h4>
                <a className="website-link" href="https://linktr.ee/hmjatt">
                    https://linktr.ee/hmjatt
                </a>
                <div className="header-button-links">
                    <a
                        className="email-link-button"
                        href="mailto:hmjatt@gmail.com"
                    >
                        <button>
                            <img
                                className="email-logo"
                                src={emailLogo}
                                alt="email-logo"
                            />
                            Email
                        </button>
                    </a>
                    <a
                        className="linkedin-link-button"
                        href="https://linkedin.com/in/harmeet-matharoo-0957a1107"
                    >
                        <button>
                            <img
                                className="linkedin-logo"
                                src={linkedin}
                                alt="linkedin-logo"
                            />
                            LinkedIn
                        </button>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
