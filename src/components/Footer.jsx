import strategy from "../assets/strategy-symbol-light.svg"
import design from "../assets/design-symbol-light.svg"
import dev from "../assets/dev-symbol-light.svg"
import Contacts from "./Contacts"

import submark from "../assets/light-mono-submark.svg"

export default function Footer() {
    return(
        <footer>
            <p className="footer-cta">Let's create something incredible.</p>
            <Contacts />
            <div className="footer-icons">
                <div className="semantic-icons">
                    <img className="semantic-icon" src={strategy} alt="Strategy icon" />
                    <img className="semantic-icon" src={design} alt="Design icon" />
                    <img className="semantic-icon" src={dev} alt="Development icon" />
                </div>
                <img src={submark} alt="Peter Davies" />
            </div>
        </footer>
    )
}