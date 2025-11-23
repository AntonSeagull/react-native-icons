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

export const TbBrandTumblrFilled = (props: IconProps) => {
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
        <Path d="M14 2a1 1 0 0 1 1 1v3h3a1 1 0 0 1 .993.883L19 7v4a1 1 0 0 1-1 1h-3v4h3a1 1 0 0 1 .993.883L19 17v4a1 1 0 0 1-1 1h-4a5 5 0 0 1-5-5v-5H6a1 1 0 0 1-.993-.883L5 11V7a1 1 0 0 1 1-1h1a2 2 0 0 0 2-2V3a1 1 0 0 1 1-1z" />
      </G>
    </Svg>
  );
};