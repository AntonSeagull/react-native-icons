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

export const PiFileVideoBold = (props: IconProps) => {
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
        <Path d="m216.49 79.51-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108a12 12 0 0 0 0 24h4a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M160 57l23 23h-23Zm-1.91 84.69a12 12 0 0 0-11.92-.15l-19.67 10.9A20 20 0 0 0 108 140H48a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h60a20 20 0 0 0 18.5-12.44l19.67 10.93A12 12 0 0 0 164 216v-64a12 12 0 0 0-5.91-10.34ZM104 204H52v-40h52Zm36-8.39-12-6.67v-9.88l12-6.67Z" />
      </G>
    </Svg>
  );
};