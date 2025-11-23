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

export const GiCrossroad = (props: IconProps) => {
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
        <Path d="m164 16-32 16 32 32 64 16V32zm184 0-64 16v48l64-16 32-32zM247 32v112h18V32zM16 64l182.7 182.7L96 496h320L313.3 246.7 496 64h-64L256 192 80 64z" />
      </G>
    </Svg>
  );
};