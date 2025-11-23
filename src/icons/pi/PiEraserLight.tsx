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

export const PiEraserLight = (props: IconProps) => {
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
        <Path d="m223.57 81.81-41.38-41.38a22 22 0 0 0-31.12 0L32.43 159.07a22 22 0 0 0 0 31.11l30.07 30.06a6 6 0 0 0 4.24 1.76H216a6 6 0 0 0 0-12h-89.51l97.08-97.08a22 22 0 0 0 0-31.11M109.51 210H69.22l-28.3-28.3a10 10 0 0 1 0-14.15L96 112.48 151.52 168Zm105.57-105.56L160 159.51 104.48 104l55.08-55.07a10 10 0 0 1 14.14 0l41.38 41.37a10 10 0 0 1 0 14.14" />
      </G>
    </Svg>
  );
};