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

export const PiCheckerboard = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-12.69 88L136 60.69V48h12.69L208 107.32V120ZM136 83.31 172.69 120H136Zm72 1.38L171.31 48H208ZM120 48v72H48V48Zm-12.69 160L48 148.69V136h12.69L120 195.31V208ZM120 172.69 83.31 136H120Zm-72-1.38L84.69 208H48ZM208 208h-72v-72h72z" />
      </G>
    </Svg>
  );
};