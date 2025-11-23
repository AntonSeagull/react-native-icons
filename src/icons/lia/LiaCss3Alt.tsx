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

export const LiaCss3Alt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m6 4 2 21 8 3 8-3 2-21zm3.332 3h13.32l-.261 3-5.696 3h5.428l-.512 6.008.02-.008-.276 3L16 24l-5.365-2-.33-4h3.021l.156 2.033 2.518.871 2.521-.853.346-4.051h-8.736l-.258-3 5.91-3H9.61z" />
      </G>
    </Svg>
  );
};