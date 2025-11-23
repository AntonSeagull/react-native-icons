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

export const PiRowsPlusTopBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M208 156H48a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-24a20 20 0 0 0-20-20m-4 40H52v-16h152Zm4-116H48a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-24a20 20 0 0 0-20-20m-4 40H52v-16h152ZM96 36a12 12 0 0 1 12-12h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 0 24h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1-12-12" />
      </G>
    </Svg>
  );
};