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

export const TbXboxBFilled = (props: IconProps) => {
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
        <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m1 5h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3a3 3 0 0 0 2.235-5A3 3 0 0 0 13 7m0 6a1 1 0 0 1 1 1l-.007.117A1 1 0 0 1 13 15h-2v-2zm0-4a1 1 0 0 1 0 2h-2V9z" />
      </G>
    </Svg>
  );
};