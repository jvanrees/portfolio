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
        {gridItems.map(item => (
          <div key={item.key} className={`${item.className} ${classes.gridChild}`}>
            <Flipped flipId={item.flipId} >
              <div style={{ width: "100%", height: "100%" }}>
                {item.content ? (
                  <>
                    {item.content}
                  </>
                ) : (
                  <div className={`${item.className} ${classes.gridChild}`}>
                    <div className={classes.gridTitle}>
                      <div className={`${classes.gridTitleText} ${classes.w1}`}>{item.title}</div>
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
}
