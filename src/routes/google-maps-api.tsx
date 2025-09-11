import { createFileRoute } from '@tanstack/react-router'
import ProjectPage from '../components/ProjectPage'

import img1 from '../img/google_maps/desktop_screenshot.png'
import img2 from '../img/google_maps/disastermng_db.png'
import img3 from '../img/google_maps/ihateeclipse.png'

const images = [img1, img2, img3]
const title = 'Disaster Management Android & Web App'
const paragraphs = [
    `For GEOG 576 at Wisconsin we were tasked to create a disaster management application using the Google Maps API, java servlet, and a PostGIS database. Over the course of the semester this project evolved into a mobile application. Users can query the database, and post to it using interactive forms.`
]

export const Route = createFileRoute('/google-maps-api')({
    component: GoogleMapsComponent,
})

function GoogleMapsComponent() {
    return (
        <div style={{ viewTransitionName: 'GoogleMaps', height: '100%', overflowY: 'auto' }}>
            <ProjectPage title={title} images={images} paragraphs={paragraphs} />
        </div>
    )
}