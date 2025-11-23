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

export const VscTextSize = (props: IconProps) => {
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
        <Path d="M3.36 7 1 13h1.34l.51-1.47h2.26L5.64 13H7L4.65 7zm-.15 3.53.78-2.14.78 2.14zM11.82 4h-1.6L7 13h1.56l.75-2.29h3.36l.77 2.29H15zM9.67 9.5l1.18-3.59q.09-.278.12-.57.04.288.11.57l1.25 3.59z" />
      </G>
    </Svg>
  );
};