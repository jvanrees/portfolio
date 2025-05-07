import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/google-maps-api')({
    component: GoogleMapsComponent,
})

function GoogleMapsComponent() {
    return (
        <div className="p-2">
            <h3>GoogleMaps Placeholder</h3>
        </div>
    )
}