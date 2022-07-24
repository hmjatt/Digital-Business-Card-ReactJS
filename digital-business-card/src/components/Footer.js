import twitter from "../images/twitter.svg";
import github from "../images/github.svg";

function Footer() {
    return (
        <footer>
            <a
                className="twitter-link-button"
                href="https://twitter.com/hmjatt"
            >
                <button>
                    <img
                        className="twitter-logo"
                        src={twitter}
                        alt="twitter-logo"
                    />
                </button>
            </a>
            <a className="github-link-button" href="https://github.com/hmjatt">
                <button>
                    <img
                        className="github-logo"
                        src={github}
                        alt="github-logo"
                    />
                </button>
            </a>
        </footer>
    );
}

export default Footer;
