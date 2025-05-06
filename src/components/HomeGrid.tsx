import { Button, Card } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { Flipped, Flipper } from 'react-flip-toolkit';



const gridItems = [
    {
        key: "aboutMe",
        className: "grid-child span-square-large titleBox no-shadow",
        flipId: "AboutMe",
        title: "About Me",
        content: (
            <Card radius="lg">
                <h1>About Me Placeholder</h1>
                <Link
                    to="/about"
                    activeProps={{
                        className: 'font-bold',
                    }}
                >
                    <Button variant="outline" color="dark" size="lg" className="button">About Me</Button>
                </Link>
            </Card>
        ),
    }

];

const HomeGrid = () => (
    <Flipper flipKey={gridItems.map(item => item.key).join('-')}>
        <div className="grid-container">
            {gridItems.map(item => (
                <div key={item.key} className={item.className}>
                    <Flipped flipId={item.flipId}>
                        <div>
                            {item.content ? (
                                <>
                                    {item.content}
                                </>
                            ) : (
                                <div className={item.className}>
                                    <div className="grid-title">
                                        <div className="grid-title-text w1">{item.title}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Flipped>
                </div>
            ))}
        </div>
    </Flipper>
);

export default HomeGrid;