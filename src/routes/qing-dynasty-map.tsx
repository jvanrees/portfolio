import { createFileRoute } from '@tanstack/react-router'
import DescriptionCard from '../components/DescriptionCard'

export const Route = createFileRoute('/qing-dynasty-map')({
    component: QingDynastyComponent,
})

const pageConfig = {
    title: "Qing Dynasty",
    content: "Qing Dynasty Placeholder"
}


function QingDynastyComponent() {
    return (
        <div style={{ viewTransitionName: 'CartoCSS', height: '100%', overflowY: 'auto' }}>
            <DescriptionCard {...pageConfig} />
        </div>
    )
}