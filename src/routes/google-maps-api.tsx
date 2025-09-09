import { createFileRoute } from '@tanstack/react-router'
import DescriptionCard from '../components/DescriptionCard'
export const Route = createFileRoute('/google-maps-api')({
    component: GoogleMapsComponent,
})

const pageConfig = {
    title: "GoogleMaps",
    content: "GoogleMaps Placeholder"
}

function GoogleMapsComponent() {
    return (
        <div style={{ viewTransitionName: 'GoogleMaps', height: '100%', overflowY: 'auto' }}>
            <DescriptionCard {...pageConfig} />
        </div>
    )
}