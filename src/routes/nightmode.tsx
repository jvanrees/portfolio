import { createFileRoute } from '@tanstack/react-router'
import ProjectPage from '../components/ProjectPage'

import img2 from '../img/night_mode/Screenshot_20181130-023540.png'
import img3 from '../img/night_mode/Screenshot_20181130-023613.png'
import img4 from '../img/night_mode/Screenshot_20181130-023746.png'
import img5 from '../img/night_mode/Screenshot_20181130-023757.png'
import img6 from '../img/night_mode/Screenshot_20181130-023810.png'
import img1 from '../img/night_mode/Screenshot_20181130-023817.png'

const images = [img1, img2, img3, img4, img5, img6]
const title = 'New MapQuest Night Navigation Mode'
// const paragraphs = [
//     `Designed for night navigation, MapQuest’s new night map style provides both an aesthetically pleasing form and functional design. The needs of the user were paramount in the design process which lead us to a simplified and focused experience.`,
//     `The process began with a competitive analysis to highlight areas of improvement in our current night style. In addition, harmony between our current day style and new night mode was prioritized for smooth transitions and consistent branding between map styles. However, the complexity of the map was reduced compared to the day map to reduce distractions during night navigation.`
// ]

const paragraphs = [
    `MapQuest’s new night map style balances aesthetics and function, creating a simplified, focused experience for safe night navigation.`,
    `We refined the style through competitive analysis, ensuring harmony with the day map for brand consistency while reducing complexity to minimize distractions at night.`
];


export const Route = createFileRoute('/nightmode')({
    component: NightmodeComponent,
})
function NightmodeComponent() {
    return (
        <div style={{ viewTransitionName: 'NightMode', height: '100%', overflowY: 'auto' }}>
            <ProjectPage title={title} images={images} paragraphs={paragraphs} />
        </div>
    )
}