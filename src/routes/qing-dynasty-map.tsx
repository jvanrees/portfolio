import { createFileRoute } from '@tanstack/react-router'
import ProjectPage from '../components/ProjectPage'
import ProjectPageMap from '../components/ProjectPageMap'

const title = 'Qing Dynasty'
const paragraphs = [
    `Old maps are beautiful. For my first ever webmap I was tasked to design a slippy map using CartoCSS in Mapbox Studio Classic. Desiring to create something unique, I decided to recreate the aesthetics of a Qing Dynasty water color map into a webmap. What drew me to this map was the beauty of how the cartographer displayed the water and the mountain ranges.`,
    `What I learned most from this project was the importance of zoom level and visualization. Different zoom levels require different levels of detail, and different image sizes. As it was my very first map created to be an artistic piece and an homage to an inspirational piece of cartographic art, I've decided to rework this one. If you love old maps, check out the original Qing dynasty era map here: https://theme.npm.edu.tw/exh105/GreenBorderlands/ch/page-2.html`
]

export const Route = createFileRoute('/qing-dynasty-map')({
    component: QingDynastyComponent,
})

function QingDynastyComponent() {
    return (
        <div style={{ viewTransitionName: 'CartoCSS', height: '100%', overflowY: 'auto' }}>
            <ProjectPage title={title} paragraphs={paragraphs} media={<ProjectPageMap />} />
        </div>
    )
}