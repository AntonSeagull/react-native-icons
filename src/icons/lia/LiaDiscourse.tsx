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

export const LiaDiscourse = (props: IconProps) => {
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
        <Path d="M16.11 3C8.993 3 3 8.716 3 15.773L3.006 29l13.103-.012C23.23 28.988 29 23.051 29 15.994S23.23 3 16.11 3M16 8a8 8 0 0 1 0 16 7.96 7.96 0 0 1-3.908-1.023L8 24l1.121-3.93A7.95 7.95 0 0 1 8 16a8 8 0 0 1 8-8" />
      </G>
    </Svg>
  );
};