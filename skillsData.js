import DevIcon from './src/assets/web-dev-icon.svg?react'
import UxUiIcon from './src/assets/ux-ui-icon.svg?react'
import GraphicIcon from './src/assets/graphic-design-icon.svg?react'
import ThreeDIcon from './src/assets/3d-design-icon.svg?react'

// dev icons:
import HtmlIcon from './src/assets/skill-icons/html.svg?react'
import CssIcon from './src/assets/skill-icons/css.svg?react'
import SassIcon from './src/assets/skill-icons/sass.svg?react'
import JavascriptIcon from './src/assets/skill-icons/javascript.svg?react'
import TypescriptIcon from './src/assets/skill-icons/typescript.svg?react'
import ReactIcon from './src/assets/skill-icons/react.svg?react'
import PhpIcon from './src/assets/skill-icons/php.svg?react'
import NodeIcon from './src/assets/skill-icons/node.svg?react'
import MongodbIcon from './src/assets/skill-icons/mongodb.svg?react'
import GithubIcon from './src/assets/skill-icons/github.svg?react'
import GsapIcon from './src/assets/skill-icons/gsap.svg?react'
import ShoelaceIcon from './src/assets/skill-icons/shoelace.svg?react'

// ux icons
// import EmpathyIcon from './src/assets/skill-icons/empathy.svg?react'
import FigmaIcon from './src/assets/skill-icons/figma.svg?react'

// gd icons
import PhotoshopIcon from './src/assets/skill-icons/photoshop.svg?react'
import IllustratorIcon from './src/assets/skill-icons/illustrator.svg?react'
import IndesignIcon from './src/assets/skill-icons/indesign.svg?react'
// import TypographyIcon from './src/assets/skill-icons/typography.svg?react'

// 3d icons
import FusionIcon from './src/assets/skill-icons/fusion.svg?react'

export default [
    {
        label: "Full-stack web development",
        icon: DevIcon,
        tags: [
            {
                icon: HtmlIcon,
                label: 'HTML'
            },
            {
                icon: CssIcon,
                label: 'CSS'
            },
            {
                icon: SassIcon,
                label: 'SASS'
            },
            {
                icon: JavascriptIcon,
                label: 'JavaScript'
            },
            {
                icon: TypescriptIcon,
                label: 'TypeScript'
            },
            {
                icon: ReactIcon,
                label: 'React'
            },
            {
                icon: PhpIcon,
                label: 'Front-end PHP'
            },
            {
                icon: GsapIcon,
                label: 'GSAP'
            },
            {
                icon: ShoelaceIcon,
                label: 'Component libraries'
            },
            {
                icon: NodeIcon,
                label: 'Node JS'
            },
            {
                icon: MongodbIcon,
                label: 'MongoDB'
            },
            {
                icon: GithubIcon,
                label: 'GitHub'
            }
        ]
    },
    {
        label: "UX and UI design",
        icon: UxUiIcon,
        tags: [
            {
                label: 'Research'
            },
            {
                label: 'Synthesis'
            },
            {
                label: 'Empathy'
            },
            {
                label: 'Understanding'
            },
            {
                label: 'Wireframing'
            },
            {
                label: 'User testing'
            },
            {
                label: 'Visualisations'
            },
            {
                label: 'High-fidelity prototyping'
            },
            {
                icon: FigmaIcon,
                label: 'Figma'
            }
        ]
    },
    {
        label: "Graphic design",
        icon: GraphicIcon,
        tags: [
            {
                icon: PhotoshopIcon,
                label: 'Photoshop'
            },
            {
                icon: IllustratorIcon,
                label: 'Illustrator'
            },
            {
                icon: IndesignIcon,
                label: 'InDesign'
            },
            {
                label: 'Design thinking'
            },
            {
                label: 'Art direction'
            },
            {
                label: 'Typography'
            }
        ]
    },
    {
        label: "3D design",
        icon: ThreeDIcon,
        tags: [
            {
                icon: FusionIcon,
                label: 'Fusion 360'
            },
            {
                label: '3D printing'
            },
            {
                label: 'Prototyping'
            },
            {
                label: 'Testing'
            },
            {
                label: 'Iterating'
            }
        ]
    }
]