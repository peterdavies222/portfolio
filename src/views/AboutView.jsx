import Header from "../components/Header"
import Footer from "../components/Footer"
import {useEffect} from "react"



export default function ProjectsView() {

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

    function hScroll() {

        
        // indicator line
        const scrollIndicatorLine = document.querySelector('.scroll-indicator-line')

        if(window.innerWidth < 900) {
            const scrollFrames = document.querySelector('.scroll-frames')
            const scrollFramesHeight = scrollFrames.offsetHeight

            const distance = scrollFrames.getBoundingClientRect().top - window.innerHeight / 2
            let percentage = -1 * distance / scrollFramesHeight * 100
            percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage
            console.log(percentage)
            
            // if top of scrollframes is more than 50% from top of page, percentage = 0
            // if top of scrollframes is less than 50% from top of page, percentage = percentage
            // if top of scrollframes is more than scrollframesheight from middle of page, percentage = 100
            scrollIndicatorLine.style.background = `linear-gradient(180deg, var(--raspberry) 0%, var(--raspberry) ${percentage}%, var(--text-primary) ${percentage}%, var(--text-primary) 100%)`
        }

        if (window.innerWidth > 899) {

            let stickySection = document.querySelector('.sticky')

            // in case it cant find the sticky section, return so code doesnt break
            if(!stickySection) return

            // calculating the progress percentage
            const offsetTop = stickySection.parentElement.offsetTop

            let percentage = (window.scrollY - offsetTop) / window.innerHeight * 50
            percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage
            
            const lineWidth = scrollIndicatorLine.offsetWidth
            scrollIndicatorLine.style.background = `linear-gradient(90deg, var(--raspberry) 0%, var(--raspberry) ${percentage}%, var(--text-primary) ${percentage}%, var(--text-primary) 100%)`

            // moving the section
            const scrollFrames = document.querySelector('.scroll-frames')
            const scrollFramesWidth = scrollFrames.offsetWidth
            const requiredTranslation = scrollFramesWidth - lineWidth - (window.innerWidth - lineWidth) / 2

            const horizontalTranslation = requiredTranslation * percentage / 100
            scrollFrames.style.transform = `translateX(-${horizontalTranslation}px)`
        }
    }

    useEffect(()=> {
        hScroll()
        window.addEventListener('scroll', hScroll)
        window.addEventListener('resize', hScroll)

        return () => {
            window.removeEventListener("scroll", hScroll);
            window.removeEventListener('resize', hScroll)
        }
    }, [])

    function bgColors() {
        const processEl = document.getElementById("about-process");
        const skillsEl = document.getElementById("about-skills")
        const footerEl = document.querySelector("footer")
        const wrapper = document.querySelector(".wrapper");
        if (!processEl || !wrapper) return; // safety

        const processSectionOffset = processEl.offsetTop;
        const skillsSectionOffset = skillsEl.offsetTop
        const footerOffset = footerEl.offsetTop
        const currentScrollHeight = window.scrollY;
        const processSectionDistance =
            processSectionOffset - currentScrollHeight;
        const skillsSectionDistance = skillsSectionOffset - currentScrollHeight
        const footerDistance = footerOffset - currentScrollHeight
        const delayHeight = window.innerHeight / 2;
        const footerDelayHeight = 2 * window.innerHeight / 3;

        // console.log("process distance: " + processSectionDistance + ", skills distance: " + skillsSectionDistance + ", delay height: " + delayHeight)
        
        // in section 1, color green
        if (processSectionDistance > delayHeight) {
            wrapper.classList.remove("light", "dark")
            wrapper.classList.add("green")

        // in section 2, color dark
        } else if (processSectionDistance <= delayHeight && skillsSectionDistance > delayHeight) {
            wrapper.classList.remove("green", "light")
            wrapper.classList.add("dark")

        // in section 3, color light
        } else if(skillsSectionDistance <= delayHeight && footerDistance > footerDelayHeight) {
            wrapper.classList.remove("light", "dark")
            wrapper.classList.add("green")
        } else {
            wrapper.classList.remove("green", "light")
            wrapper.classList.add("dark")
        }
    }

    useEffect(() => {
        bgColors();
        window.addEventListener("scroll", bgColors);
        window.addEventListener("resize", bgColors)
        return () => {
            window.removeEventListener("scroll", bgColors);
            window.removeEventListener("resize", bgColors)
        }
    }, []);
  

    

    return (
        <>
            <div className="wrapper green">
                <Header 
                    section="about"
                />
                <main className="about-view">
                    <section className="hero">
                        <h2 className="text-primary">Want to learn a bit about me? <span className="text-accent italic">Read on.</span></h2>
                    </section>
                    <section id="about-intro">
                        <div className="intro-text">
                            <h3 className="text-primary">
                                Do what you love, and you'll never work a day in your life, they said.
                            </h3>
                            <p className="text-primary body">
                                For me, web design is the perfect mix of creative and scientific thinking. From research, to prototyping, to development, crafting websites tickles every part of my brain. It's what allows me to create targeted, beautiful products: I love what I do.
                            </p>
                        </div>
                        <div className="intro-image-container">
                            <div className="image-placeholder">[img]</div>
                        </div>
                    </section>
                    <section id="about-process">
                        <h2 className="text-primary">Take a look at the <span className="text-accent italic">process</span>.</h2>
                        <div className="container">
                            <div className="sticky">
                                <div className="scroll-indicator">
                                    <div className="scroll-indicator-line"></div>
                                    {/* <div className="scroll-indicator-circle"></div> */}
                                </div>
                                <div className="scroll-section">
                                    <div className="scroll-frames">
                                        <div className="scroll-frame">
                                            {/* <div className="scroll-frame-icon">
                                                {strategyIcon}
                                            </div> */}
                                            <div className="scroll-frame-text">
                                                <h3 className="text-accent serifed">{strategyIcon}Strategy</h3>
                                                <p className="body">The beginning of an extraordinary solution. Planning, research, synthesis, and understanding. The difference between guesswork and intention.</p>
                                            </div>
                                        </div>
                                        <div className="scroll-frame">
                                            {/* <div className="scroll-frame-icon">
                                                {designIcon}
                                            </div> */}
                                            <div className="scroll-frame-text">
                                                <h3 className="text-accent serifed">{designIcon}Design</h3>
                                                <p className="body">Where the project takes shape and comes to life. Combining aesthetics with intention, to create something that brings value to its users, and makes them go wow.</p>
                                            </div>
                                        </div>
                                        <div className="scroll-frame">
                                            {/* <div className="scroll-frame-icon">
                                                {developmentIcon}
                                            </div> */}
                                            <div className="scroll-frame-text">
                                                <h3 className="text-accent serifed">{developmentIcon}Development</h3>
                                                <p className="body">Turning the hypothetical into the tangible. Problem solving, collaborating, and bringing the product to the next level. It’s my bread and butter.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about-skills">
                        <h2 className="text-primary">So, what can I <span className="text-accent italic">do</span>?</h2>
                        <div className="cards-container">
                            <ul className="cards">
                                <li className="card" id="card1">
                                    <h3 className="text-accent serifed">Full-Stack Development</h3>
                                    <p className="text-primary">HTML. CSS. JavaScript. Node.js. MongoDB. React. PHP. GSAP. Component libraries. And more to come.</p>
                                </li>
                                <li className="card" id="card2">
                                    <h3 className="text-accent serifed">UX Design</h3>
                                    <p className="text-primary">Research. Synthesis. Understanding. Empathising. The foundation of something meaningful.</p>
                                </li>
                                <li className="card" id="card3">
                                    <h3 className="text-accent serifed">UI Design</h3>
                                    <p className="text-primary">Wireframes. Visualisations. Prototypes. Courtesy of Figma.</p>
                                </li>
                                <li className="card" id="card4">
                                    <h3 className="text-accent serifed">Graphic Design</h3>
                                    <p className="text-primary">Photoshop. Illustrator. InDesign. Design thinking. Art direction. Typography.</p>
                                </li>
                                <li className="card" id="card5">
                                    <h3 className="text-accent serifed">3D Design</h3>
                                    <p className="text-primary">Fusion 360. 3D printing. Prototyping. Testing. Improving.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    {/* <section>
                        <div className="spacer">spacer</div>
                    </section> */}

                </main>
                <Footer />
            </div>

        </>
    )
}