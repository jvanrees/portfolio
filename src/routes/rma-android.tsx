import { createFileRoute } from '@tanstack/react-router'
import DescriptionCard from '../components/DescriptionCard'

export const Route = createFileRoute('/rma-android')({
    component: RmaAndroidComponent,
})
const pageConfig = {
    title: "RMA Android",
    content: "RMA Android Placeholder"
}

function RmaAndroidComponent() {
    return (
        <DescriptionCard {...pageConfig} ></DescriptionCard>

    )
}