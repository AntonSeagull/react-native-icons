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

export const TbAmpersand = (props: IconProps) => {
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
        <Path d="M19 20 8.597 9.028a2.95 2.95 0 0 1 0-4.165 2.94 2.94 0 0 1 4.161 0 2.95 2.95 0 0 1 0 4.165l-4.68 4.687a3.685 3.685 0 0 0 0 5.207 3.675 3.675 0 0 0 5.2 0L19 13" />
      </G>
    </Svg>
  );
};