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

export const GiPlatform = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m318 123.645-61.5 35.7-61.76-35.7 61.76-35.7zm93.68 54.19-61.76 35.7 61.76 35.7 61.5-35.7zm-294.39 80.64 61.76 35.7 61.5-35.7-61.5-35.7zm139.52-80.57-61.76 35.7 61.76 35.7 61.5-35.7zM31 298.365l62 35.69v-71l-62-35.65v71zm373-26-62 35.69v70.94l62-35.66zm-225.11-139.4-61.76 35.7 61.76 35.7 61.5-35.7zM109 343.305l62 35.69v-70.94l-62-35.69v71zm225.41-120.45-61.76 35.7 61.76 35.7 61.5-35.7zM249 353.055l-62-35.7v71l62 35.7zm77-35.67-61 35.67v70.94l61-35.66zm8.07-184.5-61.76 35.7 61.76 35.7 61.5-35.7zm-232.6 44.95-61.77 35.7 61.76 35.7 61.5-35.7zM481 227.565l-61 35.66v70.94l61-35.66zm-286.11 75.93 61.76 35.7 61.5-35.7-61.5-35.7z" className="cls-1" />
      </G>
    </Svg>
  );
};