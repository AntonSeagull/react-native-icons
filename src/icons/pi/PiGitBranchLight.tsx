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

export const PiGitBranchLight = (props: IconProps) => {
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
        <Path d="M230 64a30 30 0 1 0-36 29.4V112a10 10 0 0 1-10 10H96a21.84 21.84 0 0 0-10 2.42v-31a30 30 0 1 0-12 0v69.2a30 30 0 1 0 12 0V144a10 10 0 0 1 10-10h88a22 22 0 0 0 22-22V93.4A30.05 30.05 0 0 0 230 64M62 64a18 18 0 1 1 18 18 18 18 0 0 1-18-18m36 128a18 18 0 1 1-18-18 18 18 0 0 1 18 18M200 82a18 18 0 1 1 18-18 18 18 0 0 1-18 18" />
      </G>
    </Svg>
  );
};