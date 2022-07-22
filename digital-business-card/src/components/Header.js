import pic from "../pic.jpg";

function Header() {
    return (
        <header className="App-header">
            <nav>
                <img src={pic} alt="profile-pic" />
				<h1>Harmeet Matharoo</h1>
                <h4>Fullstack Developer</h4>
				<a href="https://linktr.ee/hmjatt">https://linktr.ee/hmjatt</a>
				<a href="mailto:hmjatt@gmail.com">
					<button>Email</button>
				</a>
				<a href="https://linkedin.com/in/harmeet-matharoo-0957a1107">
					<button>LinkedIn</button>
				</a>

            </nav>
        </header>
    );
}

export default Header;