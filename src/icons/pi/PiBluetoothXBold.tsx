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

export const PiBluetoothXBold = (props: IconProps) => {
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
        <Path d="M183.2 166.4 132 128l11.61-8.71a12 12 0 1 0-14.4-19.2L124 104V56l5.21 3.91a12 12 0 1 0 14.4-19.2L119.2 22.4A12 12 0 0 0 100 32v72L55.2 70.4a12 12 0 0 0-14.4 19.2L92 128l-51.2 38.4a12 12 0 1 0 14.4 19.2L100 152v72a12 12 0 0 0 19.2 9.6l64-48a12 12 0 0 0 0-19.2M124 200v-48l32 24ZM240.49 95.51a12 12 0 0 1-17 17L208 97l-15.51 15.52a12 12 0 1 1-17-17L191 80l-15.48-15.51a12 12 0 1 1 17-17L208 63l15.51-15.52a12 12 0 0 1 17 17L225 80Z" />
      </G>
    </Svg>
  );
};