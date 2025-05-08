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
        <DescriptionCard {...pageConfig} ></DescriptionCard>

    )
}