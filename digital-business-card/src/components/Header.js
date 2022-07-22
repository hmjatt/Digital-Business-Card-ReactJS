import pic from "../pic.jpg";

function Header() {
    return (
        <header className="App-header">
            <nav>
                <img className="profile-pic" src={pic} alt="profile-pic" />
                <h1 className="name-text">Harmeet Matharoo</h1>
                <h4 className="title-text">Fullstack Developer</h4>
                <a className="website-link" href="https://linktr.ee/hmjatt">https://linktr.ee/hmjatt</a>
                <a className="email-link-button" href="mailto:hmjatt@gmail.com">
                    <button>Email</button>
                </a>
                <a className="linkedin-link-button" href="https://linkedin.com/in/harmeet-matharoo-0957a1107">
                    <button>LinkedIn</button>
                </a>
            </nav>
        </header>
    );
}

export default Header;
