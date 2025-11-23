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

export const PiGitBranchBold = (props: IconProps) => {
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
        <Path d="M236 64a36 36 0 1 0-48 33.94V112a4 4 0 0 1-4 4H96a28 28 0 0 0-4 .29V97.94a36 36 0 1 0-24 0v60.12a36 36 0 1 0 24 0V144a4 4 0 0 1 4-4h88a28 28 0 0 0 28-28V97.94A36.07 36.07 0 0 0 236 64M80 52a12 12 0 1 1-12 12 12 12 0 0 1 12-12m0 152a12 12 0 1 1 12-12 12 12 0 0 1-12 12M200 76a12 12 0 1 1 12-12 12 12 0 0 1-12 12" />
      </G>
    </Svg>
  );
};