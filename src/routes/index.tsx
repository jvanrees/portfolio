import { Paper, Text } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';
import { Flipped, Flipper } from 'react-flip-toolkit';
import { gridItems } from '../components/GridItems';
import classes from '../styles/Grid.module.css';


export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Flipper flipKey={gridItems.map(item => item.key).join('-')}>
      <div className={classes.gridContainer}>
        <div className={classes.gridInner}>
          {gridItems.map(item => (
            <Paper key={item.key} className={`${item.className} ${classes.gridChild}`}>
              <Flipped flipId={item.flipId} >
                <div style={{ width: "100%", height: "100%" }}>
                  {item.content ? (
                    <>
                      {item.content}
                    </>
                  ) : (
                    <Text className={classes.gridTileText}>Jeff, you forgot to add content to {item.title}.</Text>
                  )}
                </div>
              </Flipped>
            </Paper>
          ))}
        </div>
      </div>
    </Flipper>
  );
}
{/* <div className={`${item.className} ${classes.gridChild}`}>
  <div className={classes.gridTitle}>
    <div className={`${classes.gridTitleText} ${classes.w1} locate this`}>{item.title + 'LOCATE THIS'} LOCATE THIS WHERE ARE YOU</div>
  </div>
</div> */}