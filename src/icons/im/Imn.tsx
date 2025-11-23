import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const Imn = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13M3 8v1c0 2.2 1.8 4 4 4h2c2.2 0 4-1.8 4-4V8zm3 3.828a3 3 0 0 1-1.118-.71A2.98 2.98 0 0 1 4 9h2zM9 12H7V9h2zm2.118-.882a3 3 0 0 1-1.118.71V9h2c0 .797-.313 1.549-.882 2.118M3.521 6c.153 0 .283-.11.308-.261.096-.573.589-.989 1.171-.989s1.074.416 1.171.989a.312.312 0 0 0 .616 0q.025-.152.025-.302c0-.999-.813-1.813-1.813-1.813a1.815 1.815 0 0 0-1.788 2.115.31.31 0 0 0 .308.261zm6 0c.153 0 .283-.11.308-.261.096-.573.589-.989 1.171-.989s1.074.416 1.171.989a.312.312 0 0 0 .616 0q.025-.152.025-.302c0-.999-.813-1.813-1.813-1.813a1.815 1.815 0 0 0-1.788 2.115.31.31 0 0 0 .308.261z" />
      </G>
    </Svg>
  );
};