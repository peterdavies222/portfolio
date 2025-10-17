// nectar images:
import nectarBackImage from './src/assets/nectar/nectar-full-desktop.jpg'
import nectarFrontImage from './src/assets/nectar/nectar-full-mobile.jpg'
import nectar1 from './src/assets/nectar/nectar-1.jpg'
import nectar2 from './src/assets/nectar/nectar-2.jpg'

// salt shakerz images:
import ssBackImage from './src/assets/ss/ss-full-desktop.jpg'
import ssFrontImage from './src/assets/ss/ss-full-tablet.jpg'
import ss1 from './src/assets/ss/ss-1.jpg'
import ss2 from './src/assets/ss/ss-2.jpg'

// communiteam images:
import ctBackImage from './src/assets/communiteam/communiteam-full-desktop.jpg'
import ctFrontImage from './src/assets/communiteam/communiteam-full-mobile.jpg'
import ct1 from './src/assets/communiteam/ct-1.jpg'
import ct2 from './src/assets/communiteam/ct-2.jpg'

// armband images:
import abMainImage from './src/assets/armband/main-image-2.png'
import abSketch1 from './src/assets/armband/sketch-1.jpg'
import abSketch2 from './src/assets/armband/sketch-2.jpg'
import abVizcom from './src/assets/armband/vizcom.jpg'
import abLowFid1 from './src/assets/armband/lowfidelity-1.jpg'
import abLowFid2 from './src/assets/armband/lowfidelity-2.jpg'
import abLowFid3 from './src/assets/armband/lowfidelity-3.jpg'
import abPolycam from './src/assets/armband/polycam.jpg'
import abFusion360 from './src/assets/armband/fusion360.jpg'
import abFusion3602 from './src/assets/armband/fusion360-2.jpg'
import abIteration1a from './src/assets/armband/iteration-1a.jpg'
import abIteration1b from './src/assets/armband/iteration-1b.jpg'
import abIteration2 from './src/assets/armband/iteration-2.jpg'
import abIteration3a from './src/assets/armband/iteration-3a.jpg'
import abIteration3b from './src/assets/armband/iteration-3b.jpg'
import abIteration4 from './src/assets/armband/iteration-4.jpg'
import abIteration5 from './src/assets/armband/iteration-5.jpg'
import abIteration6 from './src/assets/armband/iteration-6.jpg'
import abRender1 from './src/assets/armband/render-1.jpg'
import abRender2 from './src/assets/armband/render-2.jpg'

export default [
    {
        title: "Communiteam",
        project: "communiteam",
        link: "https://communiteam.netlify.app",
        backImage: {
            type: 'full-height',
            source: ctBackImage,
            alt: 'Communiteam dashboard page'
        },
        frontImage: {
            type: 'mobile',
            source: ctFrontImage,
            alt: 'Communiteam event posting page'
        },
        images: [
            {
                source: ct1,
                alt: 'Devices showing various screens of the Communiteam website'
            },
            {
                source: ct2,
                alt: 'Devices showing various screens of the Communiteam website'
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
        title: 'MagSafe Armband',
        project: 'armband',
        mainImage: {
            image: abMainImage,
            alt: 'MagSafe armband'
        },
        tags: [
            '3D Design',
            '3D Printing',
            'Fusion 360'
        ],
        description: "Design and prototyping for a wearable MagSafe accessory.",
        task: [
            "Going to the gym can be difficult for many reasons: not knowing where to start, 'gym-timidation', and feeling unmotivated, to name a few. With these barriers already making it hard to get into building a routine, it is important that being at the gym is as smooth an experience as possible.",
            "However, one pain point experienced by gym-goers is the need to constantly carry things around: a phone, towel, water bottle, as well as any specific equipment. Much of this ends up being placed on the floor when completing a workout set, increasing the risk of pathogen transmission, and creating an unhygienic environment.",
            "One item that should never be placed on the floor is our phones, which we are constantly touching with our hands, and even our face. Hence, there is a need for a solution which allows users to quickly place their phone somewhere secure and hygienic, whilst being able to access it between sets."
        ],
        planning: [
            {
                images: [
                    {
                        image: abSketch1,
                        alt: "Sketch of a phone attached to a MagSafe armband",
                    },
                    {
                        image: abSketch2,
                        alt: "Sketch of an armband with a face for MagSafe"
                    },
                    {
                        image: abVizcom,
                        alt: "Vizcom render of the armband"
                    }
                ],   
                caption: "First, the concept was quickly sketched in Procreate. This sketch was then imported into Vizcom, to produce an AI-generated visualisation of how the final outcome may look."
            },
            {
                images: [
                    {
                        image: abLowFid1,
                        alt: 'Cardboard prototype of the armband with MagSafe attached'
                    },
                    {
                        image: abLowFid2,
                        alt: 'Cardboard prototype of the armband with MagSafe attached'
                    },
                    {
                        image: abLowFid3,
                        alt: 'Cardboard prototype worn on arm'
                    }
                ],   
                caption: "The armband was prototyped in low fidelity, using cardboard and masking tape. This allowed for a basic understanding of how the accessory would fit and feel on the arm. It also helped uncover potential issues — as this prototype did not allow for adjustment, it was difficult to put on and take off, demonstrating the need for adjustability in the final solution."
            },
            {
                images: [
                    {
                        image: abPolycam,
                        alt: "Screenshot of the scanned prototype in the Polycam app",
                    },
                    {
                        image: abFusion360,
                        alt: "Screenshot of the scan imported into Fusion 360"
                    },
                    {
                        image: abFusion3602,
                        alt: "Screenshot of the refined design in Fusion 360"
                    }
                ],   
                caption: "Next, the low-fidelity prototype was scanned using PolyCam, to produce a digital 3D render. This render was then imported into Fusion 360, allowing for an initial design to be drafted. This design was then 3D printed, marking the beginning of the iterative design and testing process."
            }
        ],
        iteration: [
            {
                version: '1',
                image: abIteration1a,
                alt: 'null',
                caption: "MagSafe plate too large."
            },
            {
                version: '1',
                image: abIteration1b,
                alt: 'null',
                caption: "Hooks on back uncomfortable; need more rounding."
            },
            {
                version: '2',
                image: abIteration2,
                alt: 'null',
                caption: "Appropriate size; hooks more comfortable; however, hooks do not fit the velcro I had purchased."
            },
            {
                version: '3',
                image: abIteration3a,
                alt: 'null',
                caption: "Tested out a softer material to stick to the back of the MagSafe face, for a two-piece solution."
            },
            {
                version: '3',
                image: abIteration3b,
                alt: 'null',
                caption: "TPU and PLA pieces fit together tightly, eliminating the need for adhesive. However, the softer TPU provided minimal comfort improvements."
            },
            {
                version: '4',
                image: abIteration4,
                alt: 'null',
                caption: "(Don't have photo of the print). Feels comfortable, however the hooks are still not large enough to easily remove the arm straps."
            },
            {
                version: '5',
                image: abIteration5,
                alt: 'null',
                caption: "Made the hooks larger. Tested printing the MagSafe magnet gap with and without supports. The no-support version printed more nicely. Also removed the brim from the print, leading to a cleaner finish."
            },
            {
                version: '6',
                image: abIteration6,
                alt: 'null',
                caption: "Sewed the velcro arm straps and attached to the MagSafe plate. Hot-glued magnets into the magnet gap."
            }
        ],
        solution: [
            {
                image: abRender1,
                alt: 'Photo shows phone attached to MagSafe armband on arm'
            },
            {
                image: abRender2,
                alt: 'Photo shows MagSafe armband on arm'
            }
        ],
        nextProject: "salt-shakerz"
    }
    
    
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