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

export const Iming = (props: IconProps) => {
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
        <Path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13" />
        <Path d="M12.5 6h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1M5.5 6h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1M9.5 13.375a.5.5 0 0 1-.354-.146C9.074 13.157 8.686 13 8 13s-1.075.157-1.146.229a.5.5 0 0 1-.707-.707c.471-.471 1.453-.521 1.854-.521s1.383.051 1.854.521a.5.5 0 0 1-.354.853zM11.5 9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5M11.5 12a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5M4.5 9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5M4.5 12a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5" />
      </G>
    </Svg>
  );
};