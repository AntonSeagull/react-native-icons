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

export const PiArrowFatLineLeftThin = (props: IconProps) => {
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
        <Path d="M184 76h-60V32a4 4 0 0 0-6.83-2.83l-96 96a4 4 0 0 0 0 5.66l96 96A4 4 0 0 0 124 224v-44h60a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4m-4 96h-60a4 4 0 0 0-4 4v38.34L29.66 128 116 41.66V80a4 4 0 0 0 4 4h60Zm40-92v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0" />
      </G>
    </Svg>
  );
};