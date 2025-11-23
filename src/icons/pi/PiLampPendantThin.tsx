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

export const PiLampPendantThin = (props: IconProps) => {
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
        <Path d="M172 77.34V72a12 12 0 0 0-12-12h-28V16a4 4 0 0 0-8 0v44H96a12 12 0 0 0-12 12v5.34A107.75 107.75 0 0 0 20 176a4 4 0 0 0 4 4h68v4a36 36 0 0 0 72 0v-4h68a4 4 0 0 0 4-4 107.75 107.75 0 0 0-64-98.66M156 184a28 28 0 0 1-56 0v-4h56ZM28.08 172a99.77 99.77 0 0 1 61.46-88.34A4 4 0 0 0 92 80v-8a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4v8a4 4 0 0 0 2.46 3.69A99.77 99.77 0 0 1 227.92 172Z" />
      </G>
    </Svg>
  );
};