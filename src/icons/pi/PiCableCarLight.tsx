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

export const PiCableCarLight = (props: IconProps) => {
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
        <Path d="M245.91 31a6 6 0 0 0-7-4.85L15 66.1A6 6 0 0 0 16 78a6.5 6.5 0 0 0 1.07-.09L122 59.17V98H64a30 30 0 0 0-30 30v64a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30v-64a30 30 0 0 0-30-30h-58V57l107.05-19.09a6 6 0 0 0 4.86-6.91M102 162v-52h52v52Zm-38-52h26v52H46v-34a18 18 0 0 1 18-18m128 100H64a18 18 0 0 1-18-18v-18h164v18a18 18 0 0 1-18 18m18-82v34h-44v-52h26a18 18 0 0 1 18 18" />
      </G>
    </Svg>
  );
};