import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/nightmode')({
    component: NightmodeComponent,
})

function NightmodeComponent() {
    return (
        <div className="p-2">
            <h3>Nightmode Placeholder</h3>
        </div>
    )
}