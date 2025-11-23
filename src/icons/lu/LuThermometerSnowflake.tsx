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

export const LuThermometerSnowflake = (props: IconProps) => {
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
        <Path d="m10 20-1.25-2.5L6 18M10 4 8.75 6.5 6 6M10.585 15H10M2 12h6.5L10 9M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
        <Path d="m4 10 1.5 2L4 14M7 21l3-6-1.5-3M7 3l3 6h2" />
      </G>
    </Svg>
  );
};