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

export const PiSeatDuotone = (props: IconProps) => {
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
        <Path d="M216 160v32a8 8 0 0 1-8 8h-93.89a8 8 0 0 1-7.15-4.42l-58.12-116a8 8 0 0 1 0-7.16l22.16-44a8 8 0 0 1 10.73-3.57l33.89 14.31a8 8 0 0 1 3.57 10.73l-14.35 26.53a8 8 0 0 0 0 7.16l31.78 64a8 8 0 0 0 7.16 4.42H208a8 8 0 0 1 8 8" opacity={0.2} />
        <Path d="M224 232a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8m0-72v32a16 16 0 0 1-16 16h-93.89a15.93 15.93 0 0 1-14.32-8.85l-58.11-116a16.1 16.1 0 0 1 0-14.32l22.12-44A16 16 0 0 1 85 17.56l33.69 14.22.47.22a16 16 0 0 1 7.15 21.46 1.5 1.5 0 0 1-.11.22L112 80l31.78 64H208a16 16 0 0 1 16 16m-16 0h-64.23a15.91 15.91 0 0 1-14.31-8.85l-31.79-64a16.07 16.07 0 0 1 0-14.29l.12-.22L112 46.32 78.57 32.21c-.16-.06-.31-.14-.46-.21L56 76l58.1 116H208Z" />
      </G>
    </Svg>
  );
};