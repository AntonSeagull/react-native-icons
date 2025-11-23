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

export const PiGooglePlayLogoLight = (props: IconProps) => {
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
        <Path d="M238.84 115.93 71 19.89a14 14 0 0 0-14.12 0A13.68 13.68 0 0 0 50 31.87v192.26a13.68 13.68 0 0 0 6.92 11.94 14 14 0 0 0 14.12 0l167.8-96a13.75 13.75 0 0 0 0-24.14M62 217.5v-179l89.51 89.5Zm98-81 22.19 22.19L78.4 218.07ZM78.4 37.93l103.79 59.4L160 119.52ZM233 129.58l-.1.06-39.9 22.85L168.49 128 193 103.51l39.94 22.85.1.06a1.76 1.76 0 0 1 0 3.16Z" />
      </G>
    </Svg>
  );
};