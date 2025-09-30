// nectar images:
import nectarBackImage from './src/assets/nectar-full-desktop.png'
import nectarFrontImage from './src/assets/nectar-full-mobile.png'
import nectar1 from './src/assets/nectar/nectar-1.jpg'
import nectar2 from './src/assets/nectar/nectar-2.jpg'

// salt shakerz images:
import ssBackImage from './src/assets/ss-full-desktop.png'
import ssFrontImage from './src/assets/ss-full-tablet.png'
import ss1 from './src/assets/ss/ss-1.jpg'
import ss2 from './src/assets/ss/ss-2.jpg'

export default [
    {
        title: "Nectar Drinks",
        project: "nectar",
        link: "https://nectardrinkscompany.netlify.app",
        backImage: {
            type: 'full-height',
            source: nectarBackImage,
            alt: 'Nectar website'
        },
        frontImage: {
            type: 'mobile',
            source: nectarFrontImage,
            alt: 'Nectar website'
        },
        images: [
            {
                source: nectar1,
                alt: 'iPhone, iPad, and MacBook displaying the Nectar website.'
            },
            {
                source: nectar2,
                alt: 'iPhone, iPad, and MacBook displaying the Nectar website.'
            }
        ],
        tags: [
            'UX Design',
            'UI Design',
            'Front-End'
        ],
        description: "Design and development for a new, invigorating beverage.",
        task: [
            "Nectar Drinks is an up-and-coming beverage company, with drinks that use adaptogens and hemp extract to promote a calm state of mind.",
            "Design and develop a site which showcases their product line and story, as well as providing information on ingredients and stockists."
        ],
        process: {
            strategy: "web ethnography, user research and personas, competitor research, web design trends exploration.",
            design: "moodboarding, wireframing, initial design exploration, design refinement.",
            development: "HTML, CSS, and JavaScript implementation. Responsive design. Publishing to GitHub and deploying through Netlify."
        },
        nextProject: "salt-shakerz"
    },
    {
        title: "Salt Shakerz",
        project: "salt-shakerz",
        link: "https://saltshakerzpodcast.netlify.app",
        backImage: {
            type: 'full-height',
            source: ssBackImage,
            alt: 'Salt Shakerz website'
        },
        frontImage: {
            type: 'tablet',
            source: ssFrontImage,
            alt: 'Salt Shakerz website'
        },
        images: [
            {
                source: ss1,
                alt: 'Devices showing the Salt Shakerz website'
            }, 
            {
                source: ss2,
                alt: 'Devices showing the Salt Shakerz website'
            }
        ],
        tags: [
            'UI Design',
            'Web Design',
            'Front-End'
        ],
        description: "Developing a site to showcase a podcast for young Christian women.",
        task: [
            "Salt Shakerz is an emerging podcast, with the goal of creating connection and community amongst young Christian women.",
            "Using the podcast's existing branding, design and develop a site to showcase their story, episodes, and allow listeners to get in touch."
        ],
        process: {
            strategy: "Brand understanding. Client discussion. Project goals definition.",
            design: "Wireframing. Exploration. Iteration. Copywriting. Prototyping.",
            development: "HTML. CSS. JavaScript. Responsive Design."
        },
        nextProject: "communiteam"
    },
    {
        title: "Communiteam",
        project: "communiteam",
        backImage: {
            type: 'full-height',
            source: ssBackImage,
            alt: 'Salt Shakerz website'
        },
        frontImage: {
            type: 'tablet',
            source: ssFrontImage,
            alt: 'Salt Shakerz website'
        },
        images: [
            {
                source: ss1,
                alt: 'Device showing the Salt Shakerz website'
            },
            {
                source: ss2,
                alt: 'Device showing the Salt Shakerz website'
            }
        ],
        tags: [
            'UI Design',
            'Web Design',
            'Full-Stack',
            'Branding'
        ],
        description: "Design and development for a web app fostering community connection through casual sport.",
        task: [
            "Physical activity is important for many reasons: it can boost physical health, mental health, and can create a sense of community. However, many people do not achieve the recommended amount of physical activity.",
            "Create a web app which promotes physical health and fosters a sense of community, by making sporting more accessible and approachable."
        ],
        process: {
            strategy: "Topic research. Web ethnography. Problem definition. Personas. Scenarios. Site architecture.",
            design: "Moodboarding. Wireframing. Design. Prototyping. Iterating.",
            development: "Full-stack development. Database integration. GSAP. SASS. Shoelace. Lit HTML. Responsive design."
        },
        nextProject: "dollar-scholar"
    },
    // {
    //     title: "Dollar Scholar",
    //     project: "dollar-scholar",
    //     images: [
    //         {
    //             source: 'src/assets/salt-shakerz-hero.png',
    //             alt: 'Device showing the Salt Shakerz website'
    //         }
    //     ],
    //     tags: [
    //         'React',
    //         'Full-Stack',
    //         'Branding'
    //     ],
    //     description: "Building a web-based game to make personal finance education more motivating, accessible, and exciting.",
    //     task: [
    //         "Personal finance is not typically seen as an exciting topic. However, having a solid grasp on personal finance can prove highly beneficial in life.",
    //         "Design and develop a web-based solution which helps a younger audience become more familiar with the concepts surrounding personal finance."
    //     ],
    //     process: {
    //         strategy: "Extensive web ethnography, exploring the ways in which young people are struggling financially.",
    //         design: "Mobile-first wireframing. Branding experimentation. Figma prototyping.",
    //         development: "Full-stack development. React and SASS front-end. Node JS backend. MongoDB database integration."
    //     }
    // }
]