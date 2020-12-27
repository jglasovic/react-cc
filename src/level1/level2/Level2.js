import React from 'react';
import ColorConsumer from '../../ColorService/ColorConsumer';

const Level2 = props => {
  return (
    <div>
      <ColorConsumer>
        {({ error, loading, colors }) => (
          <div>
            {colors.map((c, i) => (
              <div
                key={i}
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: `#${c.hex}`
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
    </div>
  );
};

export default Level2;
