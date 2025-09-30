import Header from "../components/Header"

export default function ContactView() {

    return (
        <>
            <div className="wrapper dark">
                <Header 
                    section="contact"
                />
                <main className="contact-view">
                    <section className="hero">
                        <h2 className="text-primary">
                            Let's create something<br />
                            <span className="italic gradient">exceptional.</span>
                        </h2>
                    </section>
                    <a className="serifed text-primary" href="mailto:hello@peterdaviesdigital.com.au">hello@peterdaviesdigital.com.au<div className="contact-line"></div></a>
                </main>
            </div>
            
        </>
    )
}