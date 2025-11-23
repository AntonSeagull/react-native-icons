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

export const GiFallingStar = (props: IconProps) => {
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
        <Path d="m166.4 25.64-12.8 12.72 160 160.04 12.8-12.8zm-32 95.96L128 128l-6.4 6.4 160 160 12.8-12.8zm-96.08 32L25.6 166.4l160 160 12.8-12.8zm314.78 86.6-29.4 84.1-85.4 26 71 54-1.7 89.2 73.2-50.8 84.4 29.1-25.7-85.3 53.8-71.2-89.1-2z" />
      </G>
    </Svg>
  );
};