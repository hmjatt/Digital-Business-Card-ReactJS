import pic from "../pic.jpg";

function Header() {
    return (
        <header className="App-header">
            <nav>
                <img src={pic} alt="profile-pic" />
            </nav>
        </header>
    );
}

export default Header;