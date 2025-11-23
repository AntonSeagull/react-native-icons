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

export const RiCrosshairLine = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M13 19.938A8.004 8.004 0 0 0 19.938 13H17v-2h2.938A8.004 8.004 0 0 0 13 4.062V7h-2V4.062A8.004 8.004 0 0 0 4.062 11H7v2H4.062A8.004 8.004 0 0 0 11 19.938V17h2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
      </G>
    </Svg>
  );
};