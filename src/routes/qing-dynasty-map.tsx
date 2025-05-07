import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/qing-dynasty-map')({
    component: QingDynastyComponent,
})

function QingDynastyComponent() {
    return (
        <div className="p-2">
            <h3>Qing Dynasty Placeholder</h3>
        </div>
    )
}