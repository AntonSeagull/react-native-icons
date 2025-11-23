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

export const FcNegativeDynamic = (props: IconProps) => {
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
        <Path d="M19 22h10v20H19zM6 8h10v34H6zM32 30h10v12H32z" />
        <Path d="M42 12 32 22h10z" />
        <Path d="m27.561 10.396 2.828-2.828 9.969 9.969-2.828 2.828z" />
      </G>
    </Svg>
  );
};