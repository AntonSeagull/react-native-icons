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

export const TbStackMiddle = (props: IconProps) => {
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
        <Path d="m16 10 4-2-8-4-8 4 4 2" />
        <Path fill="currentColor" d="m12 12-4-2-4 2 8 4 8-4-4-2z" />
        <Path d="m8 14-4 2 8 4 8-4-4-2" />
      </G>
    </Svg>
  );
};