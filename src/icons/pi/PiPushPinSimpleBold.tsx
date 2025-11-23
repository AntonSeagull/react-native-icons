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

export const PiPushPinSimpleBold = (props: IconProps) => {
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
        <Path d="M216 164h-5.93L190.3 52h1.7a12 12 0 0 0 0-24H64a12 12 0 0 0 0 24h1.7L45.93 164H40a12 12 0 0 0 0 24h76v52a12 12 0 0 0 24 0v-52h76a12 12 0 0 0 0-24M90.07 52h75.86l19.77 112H70.3Z" />
      </G>
    </Svg>
  );
};