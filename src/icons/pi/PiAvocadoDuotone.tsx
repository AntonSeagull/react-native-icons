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

export const PiAvocadoDuotone = (props: IconProps) => {
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
        <Path d="m203.45 133.33-29.82-84.28a48 48 0 0 0-90.9-1l-29.54 83.54a80 80 0 1 0 150.26 1.74M128 200a40 40 0 1 1 40-40 40 40 0 0 1-40 40" opacity={0.2} />
        <Path d="M128 112a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32 32 32 0 0 1-32 32m83-61.34-29.8-84.19a56 56 0 0 0-106-1.14l-29.51 83.5A88 88 0 1 0 211 130.66M128 232a72.05 72.05 0 0 1-67.33-97.57 1.3 1.3 0 0 1 .07-.18l29.54-83.59a40 40 0 0 1 75.74.88l.06.18L195.9 136a72.05 72.05 0 0 1-67.9 96" />
      </G>
    </Svg>
  );
};