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

export const PiCirclesThreePlusBold = (props: IconProps) => {
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
        <Path d="M78 36a42 42 0 1 0 42 42 42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18 18 18 0 0 1-18 18m100 24a42 42 0 1 0-42-42 42 42 0 0 0 42 42m0-60a18 18 0 1 1-18 18 18 18 0 0 1 18-18M78 136a42 42 0 1 0 42 42 42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18 18 18 0 0 1-18 18m142-18a12 12 0 0 1-12 12h-18v18a12 12 0 0 1-24 0v-18h-18a12 12 0 0 1 0-24h18v-18a12 12 0 0 1 24 0v18h18a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};