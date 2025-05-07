import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/rma-android')({
    component: RmaAndroidComponent,
})

function RmaAndroidComponent() {
    return (
        <div className="p-2">
            <h3>RMA Android Placeholder</h3>
        </div>
    )
}