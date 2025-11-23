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

export const Imgouts = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M7.997 0a6.91 6.91 0 0 0-6.909 6.909c0 3.616 3.294 6.547 6.909 6.547V16c4.197-2.128 6.916-5.556 6.916-9.091 0-3.816-3.1-6.909-6.916-6.909M7 8c0 .828-.447 1.5-1 1.5V8H4V5h3zm5 0c0 .828-.447 1.5-1 1.5V8H9V5h3z" />
      </G>
    </Svg>
  );
};