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

export const PiListMagnifyingGlassThin = (props: IconProps) => {
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
        <Path d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 68h72a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m88 56H40a4 4 0 0 0 0 8h88a4 4 0 0 0 0-8m106.83 6.83a4 4 0 0 1-5.66 0l-22.72-22.72a36.06 36.06 0 1 1 5.66-5.66l22.72 22.72a4 4 0 0 1 0 5.66M184 172a28 28 0 1 0-28-28 28 28 0 0 0 28 28" />
      </G>
    </Svg>
  );
};