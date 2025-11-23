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

export const TbCylinderPlus = (props: IconProps) => {
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
        <Path d="M5 6a7 3 0 1 0 14 0A7 3 0 1 0 5 6" />
        <Path d="M5 6v12c0 1.657 3.134 3 7 3q.26 0 .515-.008M19 12V6M16 19h6M19 16v6" />
      </G>
    </Svg>
  );
};