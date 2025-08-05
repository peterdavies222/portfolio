import SingleContact from "./SingleContact"
import mailIcon from "../assets/mail.svg"
import mediumIcon from "../assets/medium.svg"
import instagramIcon from "../assets/instagram.svg"

export default function Contacts() {
    return (
        <div className="contacts">
            <SingleContact 
            tag="hello@peterdaviesdigital.com.au" 
            href="mailto:hello@peterdaviesdigital.com.au"
            icon={mailIcon} 
            alt="Mail icon"/>
            <SingleContact 
            tag="@peter.davies."
            href="https://medium.com/@peter.davies."
            icon={mediumIcon}
            alt="Medium website icon"/>
            <SingleContact 
            tag="@peterdaviesdigital"
            href="#"
            icon={instagramIcon}
            alt="Instagram icon"/>
        </div>

    )
}