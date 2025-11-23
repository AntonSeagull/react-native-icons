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

export const PiMemberOfBold = (props: IconProps) => {
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
        <Path d="M200 140H61.08A68.1 68.1 0 0 0 128 196h72a12 12 0 0 1 0 24h-72a92 92 0 0 1 0-184h72a12 12 0 0 1 0 24h-72a68.1 68.1 0 0 0-66.92 56H200a12 12 0 0 1 0 24" />
      </G>
    </Svg>
  );
};