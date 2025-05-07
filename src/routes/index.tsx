import { createFileRoute } from '@tanstack/react-router'
import HomeGrid from '../components/HomeGrid'
export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <HomeGrid />
}
