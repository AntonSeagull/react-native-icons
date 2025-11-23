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

export const PiOfficeChairBold = (props: IconProps) => {
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
        <Path d="M252 128a12 12 0 0 1-12 12h-13.4a52.09 52.09 0 0 1-50.6 40h-36v16h20a36 36 0 0 1 36 36 12 12 0 0 1-24 0 12 12 0 0 0-12-12h-20v12a12 12 0 0 1-24 0v-12H96a12 12 0 0 0-12 12 12 12 0 0 1-24 0 36 36 0 0 1 36-36h20v-16H80a52.09 52.09 0 0 1-50.6-40H16a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12 28 28 0 0 0 28 28h96a28 28 0 0 0 28-28 12 12 0 0 1 12-12h24a12 12 0 0 1 12 12m-179.18 5a20 20 0 0 1-4.59-16L81.8 29a19.91 19.91 0 0 1 19.79-17h52.82a19.91 19.91 0 0 1 19.79 17l13.57 88A20 20 0 0 1 168 140H88a20 20 0 0 1-15.18-7m19.85-17h70.66L151 36h-46Z" />
      </G>
    </Svg>
  );
};