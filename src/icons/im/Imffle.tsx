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

export const Imffle = (props: IconProps) => {
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
        <Path d="M12 11h-1.586l-2.5-2.5 2.5-2.5H12v2.5L15.5 5 12 1.5V4h-2a1 1 0 0 0-.707.293L6.5 7.086 3.707 4.293A1 1 0 0 0 3 4H0v2h2.586l2.5 2.5-2.5 2.5H0v2h3c.265 0 .52-.105.707-.293L6.5 9.914l2.793 2.793A1 1 0 0 0 10 13h2v2.5l3.5-3.5L12 8.5z" />
      </G>
    </Svg>
  );
};