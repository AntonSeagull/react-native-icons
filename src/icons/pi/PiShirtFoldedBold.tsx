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

export const PiShirtFoldedBold = (props: IconProps) => {
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
        <Path d="M200 36h-23l-12.51-12.49A12 12 0 0 0 156 20h-56a12 12 0 0 0-8.49 3.51L79 36H56a20 20 0 0 0-20 20v152a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M96 53l7.33-7.33 15.49 26.53L96 94.48Zm41.18 19.2 15.49-26.56L160 53v41.48ZM60 60h12v44a20 20 0 0 0 34.08 14.21l9.92-9.71V204H60Zm136 144h-56v-95.5l9.92 9.69A20 20 0 0 0 184 104V60h12Z" />
      </G>
    </Svg>
  );
};