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

export const FcPositiveDynamic = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M19 22h10v20H19zM32 8h10v34H32zM6 30h10v12H6z" />
        <Path d="m11 8 10 10V8z" />
        <Path d="m9.394 22.437-2.828-2.828 9.969-9.969 2.828 2.828z" />
      </G>
    </Svg>
  );
};