import { createFileRoute } from '@tanstack/react-router';
import ProjectPage from '../components/ProjectPage';
import ProjectPageIFrame from '../components/ProjectPageIFrame';

const title = 'RMA Visitor PostGIS';
const paragraphs = [
    `This is an older project showcasing a visitor management system built with Node.js and PostGIS.`,
    `It demonstrates integration of geospatial data with web applications, allowing users to interact with location-based information.`
];

export const Route = createFileRoute('/rma-visitor-postgis')({
    component: RmaVisitorComponent,
});

function RmaVisitorComponent() {
    return (
        <div style={{ viewTransitionName: 'RmaVisitor', height: '100%', overflowY: 'auto' }}>
            <ProjectPage title={title} paragraphs={paragraphs} media={<ProjectPageIFrame src="/rma_node/index.html" title="RMA Visitor Application" />} />
        </div>
    );
}