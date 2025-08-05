import Header from "../components/Header"
import TypewriterHeadline from "../components/Typewriter"
import Contacts from "../components/Contacts"

export default function ContactView() {
    return (
        <>
            <Header 
                section="contact"
            />
            <div className="background-gradient"></div>
            <main className="contact-view">
                <TypewriterHeadline />
                <Contacts />
            </main>
            
        </>
    )
}