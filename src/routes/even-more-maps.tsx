import { createFileRoute } from '@tanstack/react-router'
import DescriptionCard from '../components/DescriptionCard'

export const Route = createFileRoute('/even-more-maps')({
    component: EvenMoreComponent,
})

const pageConfig = {
    title: "Even More Maps",
    content: "Even More Maps Placeholder"
}


function EvenMoreComponent() {
    return (
        <div style={{ viewTransitionName: 'EvenMoreMaps', height: '100%', overflowY: 'auto' }}>
            <DescriptionCard {...pageConfig} />
        </div>
    )
}