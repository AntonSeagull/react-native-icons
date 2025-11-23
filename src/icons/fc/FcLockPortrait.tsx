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

export const FcLockPortrait = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#37474F" d="M10 41V7c0-2.2 1.8-4 4-4h20c2.2 0 4 1.8 4 4v34c0 2.2-1.8 4-4 4H14c-2.2 0-4-1.8-4-4" />
        <Path fill="#BBDEFB" d="M34 6H14c-.6 0-1 .4-1 1v34c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1" />
        <Path d="M29 30H19c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1" />
        <Path d="M24 16c-2.2 0-4 1.8-4 4v3h2v-3c0-1.1.9-2 2-2s2 .9 2 2v3h2v-3c0-2.2-1.8-4-4-4" />
      </G>
    </Svg>
  );
};