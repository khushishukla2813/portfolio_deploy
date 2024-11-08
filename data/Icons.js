import Image from "next/image"
import styles from "../styles/Skills.module.css"
import {
    SiPandas,
    SiJavascript,
    SiCss3,
    SiDocker,
    SiHeroku,
    SiHtml5,
    SiMongodb,
    SiNodeDotJs,
    SiPython,
    SiReact,
    SiSass,
    SiWebpack,
    SiBabel,
    SiGit,
    SiGithub,
    SiGithubactions,
    SiGooglecloud,
    SiLinux,
    SiMocha,
    SiJest,
    SiPostgresql,
    SiRedux,
    SiNetlify,
    SiTypescript,
    SiUbuntu,
    SiFirebase,
    SiMarkdown,
    SiWordpress,
    SiVercel,
    SiCplusplus,
    SiCanva,
    SiMysql,
    SiFlask,
    SiDjango,
    SiSolidity,
    SiWeb3Dotjs,
    SiIpfs,
    SiExpress,
    SiEthereum,
    SiGitlab,
    SiTailwindcss,
    SiPostman,
    SiLit,
    SiHasura,
    SiGraphql,
    SiStrapi,
    SiMaterialui,
    SiBitbucket,
    SiShopify,
    SiPolymerproject,
    SiRedis,
    SiGo,
    SiChainlink,
    SiCypress,
    SiChakraui,
    SiOpenZeppelin,
    SiAuth0,
    SiPlaywright
} from "react-icons/si";

import {
    FaCouch,
    FaNodeJs,
    FaHardHat
} from "react-icons/fa"

const data = [{
        name: 'JavaScript',
        icon: SiJavascript,
        options: {
            color: 'yellow'
        }
    },
    {
        name: 'Playwright',
        icon: SiPlaywright,
        options: {
            color: '#2EAD33',
        }
    },
    {
        name: 'CSS3',
        icon: SiCss3,
        options: {
            color: '#1572B6',
        }
    },
    {
        name: 'Docker',
        icon: SiDocker,
        options: {
            color: '#2496ED'
        }
    },
    
    {
        name: 'HTML5',
        icon: SiHtml5,
        options: {
            color: '#E34F26'
        }
    },
    {
        name: 'MongoDB',
        icon: SiMongodb,
        options: {
            color: '#47A248'
        }
    },
    {
        name: 'NodeJS',
        icon: FaNodeJs,
        options: {
            color: '#339933'
        }
    },
    {
        name: 'Python',
        icon: SiPython,
        options: {
            color: '#3776AB'
        }
    },
    {
        name: 'React',
        icon: SiReact,
        options: {
            color: '#61DAFB'
        }
    },
   
    {
        name: 'Webpack',
        icon: SiWebpack,
        options: {
            color: '#8DD6F9'
        }
    },
   
    {
        name: 'Git',
        icon: SiGit,
        options: {
            color: '#F05032'
        }
    },
    {
        name: 'GitHub',
        icon: SiGithub,
        options: {
            color: 'white'
        }
    },
    {
        name: 'GitHub Actions',
        icon: SiGithubactions,
        options: {
            color: '#2088FF'
        }
    },
    {
        name: 'Google Cloud Platform',
        icon: SiGooglecloud,
        options: {
            color: '#4285F4'
        }
    },
    {
        name: 'Linux',
        icon: SiLinux,
        options: {
            color: '#FCC624'
        }
    },
    
    
    {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        options: {
            color: '#4169E1'
        }
    },
    {
        name: 'Redux',
        icon: SiRedux,
        options: {
            color: '#764ABC'
        }
    },
    {
        name: 'Netlify',
        icon: SiNetlify,
        options: {
            color: '#00C7B7'
        }
    },
    {
        name: 'TypeScript',
        icon: SiTypescript,
        options: {
            color: '#3178C6'
        }
    },
    {
        name: 'Ubuntu',
        icon: SiUbuntu,
        options: {
            color: '#E95420'
        }
    },
    {
        name: 'Firebase',
        icon: SiFirebase,
        options: {
            color: '#FFCA28'
        }
    },
    
    {
        name: 'WordPress',
        icon: SiWordpress,
        options: {
            color: '#21759B'
        }
    },
    
    {
        name: 'C++',
        icon: SiCplusplus,
        options: {
            color: '#00599C'
        }
    },
    {
        name: 'Canva',
        icon: SiCanva,
        options: {
            color: '#00C4CC'
        }
    },
    {
        name: 'MySQL',
        icon: SiMysql,
        options: {
            color: '#4479A1'
        }
    },
    {
        name: 'Flask',
        icon: SiFlask,
        options: {
            color: 'white'
        }
    },
    {
        name: 'Django',
        icon: SiDjango,
        options: {
            color: 'white'
        }
    },
 
    {
        name: 'Web3',
        icon: SiWeb3Dotjs,
        options: {
            color: '#F16822'
        }
    },
 
    {
        name: 'Express',
        icon: SiExpress,
        options: {
            color: 'white'
        }
    },

 
    {
        name: 'GitLab',
        icon: SiGitlab,
        options: {
            color: '#FCA121'
        }
    },
    {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        options: {
            color: '#06B6D4'
        }
    },
    {
        name: 'Postman',
        icon: SiPostman,
        options: {
            color: '#FF6C37'
        }
    },
 
   
  
    {
        name: 'GraphQL',
        icon: SiGraphql,
        options: {
            color: '#E10098'
        }
    },
    
   
  
    {
        name: 'Shopify',
        icon: SiShopify,
        options: {
            color: '#7AB55C'
        }
    },
 
   
    {
        name: 'Go',
        icon: SiGo,
        options: {
            color: '#00ADD8'
        }
    },
  
    
    {
        name: 'Chakra UI',
        icon: SiChakraui,
        options: {
            color: '#319795',
        }
    },

    {
        name: 'Pandas',
        icon: SiPandas,
        options: {
            color: '#2496ED'
        }
    },
    
]

export const Icons = data.sort((a, b) => a.name.localeCompare(b.name));
