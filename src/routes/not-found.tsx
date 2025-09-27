import { createFileRoute } from "@tanstack/react-router";
import NotFoundComponent from "../components/NotFound";

export const Route = createFileRoute("/not-found")({
	component: NotFoundComponent,
});
