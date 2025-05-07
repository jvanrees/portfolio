import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/even-more-maps')({
    component: EvenMoreComponent,
})

function EvenMoreComponent() {
    return (
        <div className="p-2">
            <h3>EvenMore Placeholder</h3>
        </div>
    )
}