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

export const PiArrowsOutBold = (props: IconProps) => {
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
        <Path d="M220 48v48a12 12 0 0 1-24 0V77l-35.51 35.52a12 12 0 0 1-17-17L179 60h-19a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12M95.51 143.51 60 179v-19a12 12 0 0 0-24 0v48a12 12 0 0 0 12 12h48a12 12 0 0 0 0-24H77l35.52-35.51a12 12 0 0 0-17-17ZM208 148a12 12 0 0 0-12 12v19l-35.51-35.52a12 12 0 0 0-17 17L179 196h-19a12 12 0 0 0 0 24h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12M77 60h19a12 12 0 0 0 0-24H48a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0V77l35.51 35.52a12 12 0 0 0 17-17Z" />
      </G>
    </Svg>
  );
};