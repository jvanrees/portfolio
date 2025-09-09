import { Button } from '@mantine/core'
import { createFileRoute, Link } from '@tanstack/react-router'
import { RmaAndroidDesc } from '../components/RmaAndroidDesc'
import { RmaAndroidMedia } from '../components/RmaAndroidMedia'

export const Route = createFileRoute('/rma-android')({
    component: RmaAndroidComponent,
})

function RmaAndroidComponent() {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 530;

    const gridContainerStyle = {
        height: '100%',
        width: '100%',
        display: 'grid',
        zIndex: 3,
        ...(isMobile ? {
            gridTemplateAreas: '"image-grid" "description-grid" "bufferButton" "bottom-nav"',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr 1fr auto auto'
        } : {
            gridTemplateAreas: '"map-logo-row image-grid" "description-grid image-grid" "bottom-nav image-grid"',
            gridTemplateColumns: '37.5% 62.5%',
            gridTemplateRows: 'auto 1fr auto'
        })
    };

    const imageGridStyle = {
        overflow: 'hidden',
        gridArea: 'image-grid',
        boxShadow: 'none',
        backgroundColor: 'transparent',
    };

    const descriptionGridStyle = {
        backgroundColor: '#fff',
        gridArea: 'description-grid',
        borderTopRightRadius: '4px',
        borderTopLeftRadius: '4px',
        padding: '1rem'
    };

    const bottomNavStyle = {
        gridArea: 'bottom-nav',
        backgroundColor: 'white',
        padding: '0.5rem 0.5rem 0.5rem 1rem',
        zIndex: 999,
        boxShadow: '0 -0.2px 1px 1px rgba(0, 0, 0, 0.1), 0 -0.5px 0px 0 rgba(0, 0, 0, 0.05), 0 -1px 1px 0 rgba(0, 0, 0, 0.01)'
    };

    const bufferButtonStyle = {
        gridArea: 'bufferButton',
        visibility: (isMobile ? 'visible' : 'hidden') as 'visible' | 'hidden',
        padding: '0.5rem'
    };

    return (
        <div style={{ viewTransitionName: 'RmaAndroid' }}>
            <div style={gridContainerStyle}>
                <div style={imageGridStyle}>
                    <RmaAndroidMedia />
                </div>
                <div style={descriptionGridStyle}>
                    <RmaAndroidDesc />
                </div>
                {isMobile && (
                    <div style={bufferButtonStyle}>
                        <Button style={{ opacity: 0 }}>
                            &nbsp;
                        </Button>
                    </div>
                )}
                <div style={bottomNavStyle}>
                    <Link to="/">
                        <Button
                            variant="outline"
                            color="dark"
                            size="lg"
                        >
                            ← Back
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}