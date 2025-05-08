import { createFileRoute } from '@tanstack/react-router'
import DescriptionCard from '../components/DescriptionCard'

export const Route = createFileRoute('/about')({
    component: AboutComponent,
})

const pageConfig = {
    title: "About Me",
    content: "About Me Placeholder"
}

function AboutComponent() {
    return (
        <DescriptionCard {...pageConfig} ></DescriptionCard>
    )
}