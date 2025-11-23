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

export const PiScreencastFill = (props: IconProps) => {
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
        <Path d="M56 208a8 8 0 0 1-8.24 8 8.28 8.28 0 0 1-7.76-8.24 8 8 0 0 0-7.76-7.76 8.28 8.28 0 0 1-8.24-7.76 8 8 0 0 1 8-8.24 24 24 0 0 1 24 24m-24-56a8 8 0 0 0-8 8.65 8.17 8.17 0 0 0 8.24 7.35A40 40 0 0 1 72 207.76a8.17 8.17 0 0 0 7.36 8.24 8 8 0 0 0 8.64-8 56.06 56.06 0 0 0-56-56m0-32a8 8 0 0 0-8 8.6 8.22 8.22 0 0 0 8.3 7.4 72.08 72.08 0 0 1 71.7 71.68 8.22 8.22 0 0 0 7.4 8.3 8 8 0 0 0 8.6-8A88.1 88.1 0 0 0 32 120m184-80H40a16 16 0 0 0-16 16v44.08a4 4 0 0 0 4.15 4 104.11 104.11 0 0 1 107.78 107.77 4 4 0 0 0 4 4.15H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16" />
      </G>
    </Svg>
  );
};