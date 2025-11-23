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

export const LiaUserMinusSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M14 4c-3.9 0-7 3.1-7 7 0 2.4 1.2 4.6 3.1 5.8C6.5 18.3 4 21.9 4 26h2c0-4.4 3.6-8 8-8 1.4 0 2.7.4 3.8 1-1.1 1.4-1.8 3.1-1.8 5 0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-1.7 0-3.4.6-4.7 1.5-.4-.3-.9-.5-1.4-.7 1.9-1.3 3.1-3.4 3.1-5.8 0-3.9-3.1-7-7-7m0 2c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5m10 12c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6m-4 5v2h8v-2z" />
      </G>
    </Svg>
  );
};