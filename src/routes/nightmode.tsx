import { createFileRoute } from '@tanstack/react-router'
import DescriptionCard from '../components/DescriptionCard'
export const Route = createFileRoute('/nightmode')({
    component: NightmodeComponent,
})
const pageConfig = {
    title: "Nightmode",
    content: "Nightmode Placeholder"
}
function NightmodeComponent() {
    return (
        <div style={{ viewTransitionName: 'NightMode', height: '100%', overflowY: 'auto' }}>
            <DescriptionCard {...pageConfig} />
        </div>
    )
}