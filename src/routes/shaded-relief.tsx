import { createFileRoute } from '@tanstack/react-router'
import DescriptionCard from '../components/DescriptionCard'

export const Route = createFileRoute('/shaded-relief')({
    component: ShadedReliefComponent,
})
const pageConfig = {
    title: "Shaded Relief",
    content: "Shaded Relief Placeholder"
}

function ShadedReliefComponent() {
    return (
        <div style={{ viewTransitionName: 'ShadedRelief', height: '100%', overflowY: 'auto' }}>
            <DescriptionCard {...pageConfig} />
        </div>
    )
}