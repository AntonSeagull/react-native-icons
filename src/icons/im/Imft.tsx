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

export const Imft = (props: IconProps) => {
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
        <Path d="M10.5 14h-5a.5.5 0 0 1-.5-.5V8H3a.5.5 0 0 1-.354-.854l5-5a.5.5 0 0 1 .707 0l5 5a.499.499 0 0 1-.354.854h-2v5.5a.5.5 0 0 1-.5.5zM6 13h4V7.5a.5.5 0 0 1 .5-.5h1.293L8 3.207 4.207 7H5.5a.5.5 0 0 1 .5.5z" />
      </G>
    </Svg>
  );
};