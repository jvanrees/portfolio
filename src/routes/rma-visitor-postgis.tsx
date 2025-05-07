import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/rma-visitor-postgis')({
    component: RmaVisitorComponent,
})

function RmaVisitorComponent() {
    return (
        <div className="p-2">
            <h3>RMA Visitor Placeholder</h3>
        </div>
    )
}