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

export const TfiWheelchair = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m10.901 12.85.977.213A4.96 4.96 0 0 1 7 17c-2.757 0-5-2.243-5-5a5 5 0 0 1 3.725-4.836l.254.967A4 4 0 0 0 3 12c0 2.206 1.794 4 4 4a3.97 3.97 0 0 0 3.901-3.15M16 15.121v1h-1.868l-.955-4.118H7.019l-.544-8.082A2 2 0 0 1 5 2c0-1.103.897-2 2-2s2 .897 2 2c0 .938-.65 1.72-1.521 1.936l.27 4.011 3.632-.901.24.971-3.805.943.138 2.042h6.018l.955 4.118zM7 3a1.001 1.001 0 1 0-1-1c0 .551.448 1 1 1" />
      </G>
    </Svg>
  );
};