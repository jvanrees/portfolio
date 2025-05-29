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
        <DescriptionCard {...pageConfig} ></DescriptionCard>
    )
}