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

export const Iml3 = (props: IconProps) => {
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
        <Path d="M13.333 0H2.667A2.675 2.675 0 0 0 0 2.667v10.666C0 14.801 1.2 16 2.667 16h10.666A2.674 2.674 0 0 0 16 13.333V2.667C16 1.2 14.8 0 13.333 0M2.854 13.854l-1.207-1.207 4-4 .457.457zm-.458-10.75.457-.457 5.146 4.146 5.146-4.146.457.457-5.604 6.604-5.604-6.604zm10.75 10.75-3.25-4.75.457-.457 4 4z" />
      </G>
    </Svg>
  );
};