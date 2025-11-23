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

export const RiBox1Line = (props: IconProps) => {
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
        <Path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11zM5.494 7.078 13 11.423v8.687l6.5-3.763V7.653L12 3.311zM4.5 8.813v7.534L11 20.11v-7.533z" />
      </G>
    </Svg>
  );
};