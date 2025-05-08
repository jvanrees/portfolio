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
        <DescriptionCard {...pageConfig} ></DescriptionCard>
    )
}