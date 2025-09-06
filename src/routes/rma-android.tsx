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
        <div style={{ viewTransitionName: 'RmaAndroid' }}>
            <DescriptionCard {...pageConfig} />
        </div>
    )
}