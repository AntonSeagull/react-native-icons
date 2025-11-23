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

export const GrX = (props: IconProps) => {
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
        <Path fill="#000" d="m.058 1 9.267 12.39L0 23.462h2.099l8.163-8.82 6.596 8.82H24l-9.788-13.087L22.892 1h-2.1l-7.517 8.122L7.2 1zm3.087 1.546h3.28l14.488 19.37h-3.28L3.145 2.547Z" />
      </G>
    </Svg>
  );
};