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

export const VscMapFilled = (props: IconProps) => {
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
        <Path d="M2 5.5V13l3.5-2.187v-7.5zM9.5 12.688v-7.5l-3-1.875v7.5zM10.5 12.688v-7.5L14 3v7.5z" />
      </G>
    </Svg>
  );
};