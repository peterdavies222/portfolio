import Header from '../components/Header'
import Footer from '../components/Footer'
import Project from "../components/Project"
import projectsData from "../../projectsData"
import {useEffect} from 'react'

export default function HomeView() {

    const strategyIcon = <svg className="semantic-icon" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.4882 14.3775V10.6657C40.4882 9.85125 39.8268 9.19345 39.0079 9.19345H33.1181C32.4252 9.19345 31.8583 8.62963 31.8583 7.94052V2.08304C31.8583 1.26863 31.1969 0.61084 30.378 0.61084H26.6457C25.8268 0.61084 25.1654 1.26863 25.1654 2.08304V7.94052C25.1654 8.62963 24.5984 9.19345 23.9055 9.19345H18.0787C17.3858 9.19345 16.8189 8.62963 16.8189 7.94052V2.08304C16.8189 1.26863 16.1575 0.61084 15.3386 0.61084H11.6063C10.7874 0.61084 10.126 1.26863 10.126 2.08304V7.94052C10.126 8.62963 9.55905 9.19345 8.86614 9.19345H2.99213C2.17323 9.19345 1.51181 9.85125 1.51181 10.6657V14.3775C1.51181 15.1919 2.17323 15.8497 2.99213 15.8497H8.88189C9.5748 15.8497 10.1417 16.4135 10.1417 17.1026V22.8974C10.1417 23.5866 9.5748 24.1504 8.88189 24.1504H2.99213C2.17323 24.1504 1.51181 24.8082 1.51181 25.6226V29.3344C1.51181 30.1488 2.17323 30.8066 2.99213 30.8066H8.88189C9.5748 30.8066 10.1417 31.3704 10.1417 32.0595V37.917C10.1417 38.7314 10.8031 39.3892 11.622 39.3892H15.3543C16.1732 39.3892 16.8346 38.7314 16.8346 37.917V32.0595C16.8346 31.3704 17.4016 30.8066 18.0945 30.8066H23.9213C24.6142 30.8066 25.1811 31.3704 25.1811 32.0595V37.917C25.1811 38.7314 25.8425 39.3892 26.6614 39.3892H30.3937C31.2126 39.3892 31.874 38.7314 31.874 37.917V32.0595C31.874 31.3704 32.4409 30.8066 33.1339 30.8066H39.0236C39.8425 30.8066 40.5039 30.1488 40.5039 29.3344V25.6226C40.5039 24.8082 39.8425 24.1504 39.0236 24.1504H33.1339C32.4409 24.1504 31.874 23.5866 31.874 22.8974V17.1026C31.874 16.4135 32.4409 15.8497 33.1339 15.8497H39.0236C39.8425 15.8497 40.5039 15.1919 40.5039 14.3775H40.4882ZM23.9055 24.1504H18.0787C17.3858 24.1504 16.8189 23.5866 16.8189 22.8974V17.1026C16.8189 16.4135 17.3858 15.8497 18.0787 15.8497H23.9055C24.5984 15.8497 25.1654 16.4135 25.1654 17.1026V22.8974C25.1654 23.5866 24.5984 24.1504 23.9055 24.1504Z" fill="currentColor"/>
                        </svg>

    const designIcon = <svg className="semantic-icon" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8425 0.61084H12.1103C11.2927 0.61084 10.6299 1.26997 10.6299 2.08304V27.9249C10.6299 28.7379 11.2927 29.3971 12.1103 29.3971H15.8425C16.6601 29.3971 17.3229 28.7379 17.3229 27.9249V2.08304C17.3229 1.26997 16.6601 0.61084 15.8425 0.61084Z" fill="currentColor"/>
                            <path d="M15.8425 32.7173H12.1103C11.2927 32.7173 10.6299 33.3764 10.6299 34.1895V37.9013C10.6299 38.7144 11.2927 39.3735 12.1103 39.3735H15.8425C16.6601 39.3735 17.3229 38.7144 17.3229 37.9013V34.1895C17.3229 33.3764 16.6601 32.7173 15.8425 32.7173Z" fill="currentColor"/>
                            <path d="M29.8898 0.61084H26.1575C25.3399 0.61084 24.6772 1.26997 24.6772 2.08304V27.9249C24.6772 28.7379 25.3399 29.3971 26.1575 29.3971H29.8898C30.7073 29.3971 31.3701 28.7379 31.3701 27.9249V2.08304C31.3701 1.26997 30.7073 0.61084 29.8898 0.61084Z" fill="currentColor"/>
                            <path d="M29.8898 32.7173H26.1575C25.3399 32.7173 24.6772 33.3764 24.6772 34.1895V37.9013C24.6772 38.7144 25.3399 39.3735 26.1575 39.3735H29.8898C30.7073 39.3735 31.3701 38.7144 31.3701 37.9013V34.1895C31.3701 33.3764 30.7073 32.7173 29.8898 32.7173Z" fill="currentColor"/>
                        </svg>

    const developmentIcon = <svg
                                className="semantic-icon"
                                viewBox="0 0 42 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g clipPath="url(#clip0_197_65)">
                                    <path
                                    d="M3.62207 39.2953L1.02365 36.7111C0.456717 36.1473 0.456717 35.2232 1.02365 34.6594L14.8819 20.8771C15.3701 20.3916 15.3701 19.6085 14.8819 19.1387L1.02365 5.34071C0.456717 4.77689 0.456717 3.85285 1.02365 3.28903L3.62207 0.704848C4.189 0.141027 5.11813 0.141027 5.68506 0.704848L23.0236 17.9484C24.1575 19.076 24.1575 20.9241 23.0236 22.0518L5.68506 39.2953C5.11813 39.8591 4.189 39.8591 3.62207 39.2953Z"
                                    fill="currentColor"
                                    />
                                    <path
                                    d="M21.1496 39.2953L18.5512 36.7111C17.9842 36.1473 17.9842 35.2232 18.5512 34.6594L32.4094 20.8771C32.8976 20.3916 32.8976 19.6085 32.4094 19.1387L18.5512 5.34071C17.9842 4.77689 17.9842 3.85285 18.5512 3.28903L21.1496 0.704848C21.7165 0.141027 22.6457 0.141027 23.2126 0.704848L40.5512 17.9484C41.685 19.076 41.685 20.9241 40.5512 22.0518L23.2126 39.2953C22.6457 39.8591 21.7165 39.8591 21.1496 39.2953Z"
                                    fill="currentColor"
                                    />
                                </g>
                                </svg>
    
    // function bgColors() {
    //     let projectsSectionOffset = document.getElementById("projects").offsetHeight
    //     let currentScrollHeight = window.scrollY
    //     let projectsSectionDistance = projectsSectionOffset - currentScrollHeight
    //     let quarterWindowHeight = window.innerHeight / 2
    //     let wrapper = document.querySelector('.wrapper')
    //     if(projectsSectionDistance <= quarterWindowHeight) {
    //         wrapper.classList.remove('dark')
    //         wrapper.classList.add('light')
    //     } else {
    //         wrapper.classList.remove('light')
    //         wrapper.classList.add('dark')
    //     }
    // }

    function bgColors() {
        const projectsEl = document.getElementById("projects");
        const videoEl = document.getElementById("video")
        const footerEl = document.querySelector('footer')
        const wrapper = document.querySelector(".wrapper");
        if (!projectsEl || !wrapper) return; // safety

        const projectsSectionOffset = projectsEl.offsetTop;
        const currentScrollHeight = window.scrollY;
        const projectsSectionDistance =
            projectsSectionOffset - currentScrollHeight;

        // const footerOffset = footerEl.offsetTop
        // const footerDistance = footerOffset - currentScrollHeight
        const videoOffset = videoEl.offsetTop
        const videoDistance = videoOffset - currentScrollHeight

        const delayHeight = window.innerHeight / 2;
        const footerDelayHeight = 2 * window.innerHeight / 3;

        if (projectsSectionDistance >= delayHeight) {
            wrapper.classList.remove("light");
            wrapper.classList.add("dark");
        } else if(projectsSectionDistance < delayHeight && videoDistance >= delayHeight ){
            wrapper.classList.remove("dark");
            wrapper.classList.add("light");
        } else {
            wrapper.classList.remove("light")
            wrapper.classList.add("dark") 
        }
    }
    useEffect(() => {

        // Run once on mount
        bgColors();

        // Add scroll listener
        window.addEventListener("scroll", bgColors);
        return () => window.removeEventListener("scroll", bgColors);
    }, []);
  
    const projectElements = projectsData.map((entry, i) => {
            return (
                <Project 
                    // title={entry.title}
                    // project={entry.project}
                    // tags={entry.tags}
                    // description={entry.description}
                    // images={entry.images}
                    project={entry}
                    key={i}
                />
            )
        })


    return (

        <>
            <div className="wrapper dark">
                <Header 
                    section="projects"
                />
                <main className="projects">
                    <section className="hero">
                        <span>
                            <h1 className="text-primary">Hi, I'm Peter!</h1>
                            <h2 className="text-primary">I <span>{strategyIcon} <span>strategise</span>,</span> <span>{designIcon} <span>design</span>,</span> and <span>{developmentIcon} <span>deploy</span></span> incredible websites.</h2>
                        </span>
                    </section>
                    <section id="projects">
                        <h2 className="text-primary">Check out my <span className="italic text-accent">work</span>.</h2>
                        <div className="projects">
                            {projectElements}
                        </div>
                    </section>
                    <section id="video">
                        <iframe width="420" height="315"
                            src="https://www.youtube.com/embed/ivT6hT8mAn0?controls=0&showinfo=0">
                        </iframe>
                    </section>
                </main>
                <Footer />
            </div>
        </>
        
    )

}