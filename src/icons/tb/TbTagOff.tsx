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

export const TbTagOff = (props: IconProps) => {
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
        <Path d="M7.149 7.144A.498.498 0 0 0 7.5 8a.5.5 0 0 0 .341-.135" />
        <Path d="M3.883 3.875A3 3 0 0 0 3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0L17.5 17.5m2.005-2.005.79-.79a2.41 2.41 0 0 0 0-3.41l-7.71-7.71A2 2 0 0 0 11.173 3H7M3 3l18 18" />
      </G>
    </Svg>
  );
};