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

export const GoX = (props: IconProps) => {
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
        <Path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.75.75 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.75.75 0 0 1-.734-.215L12 13.06l-5.22 5.22a.75.75 0 0 1-1.042-.018.75.75 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06" />
      </G>
    </Svg>
  );
};