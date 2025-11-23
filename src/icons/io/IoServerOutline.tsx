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

export const IoServerOutline = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Ellipse cx={256} cy={112} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} rx={176} ry={80} />
        <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M432 112v288c0 44.183-78.798 80-176 80S80 444.183 80 400V112" />
        <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M432 256c0 44.183-78.798 80-176 80S80 300.183 80 256" />
      </G>
    </Svg>
  );
};