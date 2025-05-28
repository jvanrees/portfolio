import { createFileRoute } from '@tanstack/react-router';
import { Flipped, Flipper } from 'react-flip-toolkit';
import { gridItems } from '../components/GridItems';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
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
}
