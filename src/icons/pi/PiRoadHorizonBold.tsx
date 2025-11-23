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

export const PiRoadHorizonBold = (props: IconProps) => {
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
        <Path d="M237.88 202.46a12 12 0 0 1-16.34-4.58L153 76h-13v4a12 12 0 0 1-24 0v-4h-13L34.46 197.88a12 12 0 1 1-20.92-11.76L75.48 76H24a12 12 0 0 1 0-24h208a12 12 0 0 1 0 24h-51.48l61.94 110.12a12 12 0 0 1-4.58 16.34M128 108a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12m0 56a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12" />
      </G>
    </Svg>
  );
};