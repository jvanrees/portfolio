import { createFileRoute } from '@tanstack/react-router'
import DescriptionCard from '../components/DescriptionCard'

export const Route = createFileRoute('/rma-visitor-postgis')({
    component: RmaVisitorComponent,
})
const pageConfig = {
    title: "RMA Visitor",
    content: "RMA Visitor Placeholder"
}

function RmaVisitorComponent() {
    return (
        <div style={{ viewTransitionName: 'RmaVisitor', height: '100%', overflowY: 'auto' }}>
            <DescriptionCard {...pageConfig} />
        </div>
    )
}