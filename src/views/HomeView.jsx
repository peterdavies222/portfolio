import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomeView() {

    return (

        <>
            <Header 
                section="home"
            />
            <div className="background-gradient" aria-hidden="true"></div>
            <main className="home-view">
                <div className="showreel-placeholder">Showreel</div>
            </main>
            <Footer />
        </>
        
    )

}