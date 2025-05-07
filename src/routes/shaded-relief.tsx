import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shaded-relief')({
    component: ShadedReliefComponent,
})

function ShadedReliefComponent() {
    return (
        <div className="p-2">
            <h3>Shaded Relief Placeholder</h3>
        </div>
    )
}