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

export const FcOrganization = (props: IconProps) => {
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
        <Path fill="#90CAF9" d="M42 42H6V10c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4z" />
        <Path fill="#64B5F6" d="M6 42h36v2H6z" />
        <Path d="M31 27h6v5h-6zM21 27h6v5h-6zM11 27h6v5h-6zM31 35h6v5h-6zM11 35h6v5h-6zM31 19h6v5h-6zM21 19h6v5h-6zM11 19h6v5h-6zM31 11h6v5h-6zM21 11h6v5h-6zM11 11h6v5h-6zM21 35h6v9h-6z" />
      </G>
    </Svg>
  );
};