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

export const TbUmbrellaFilled = (props: IconProps) => {
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
        <Path d="M12 3a9 9 0 0 1 9 9 1 1 0 0 1-.883.993L20 13h-7v5a1 1 0 0 0 1.993.117L15 18a1 1 0 0 1 2 0 3 3 0 0 1-5.995.176L11 18v-5H4a1 1 0 0 1-.993-.883L3 12a9 9 0 0 1 9-9" />
      </G>
    </Svg>
  );
};