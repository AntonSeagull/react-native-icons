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

export const GiSaloonDoors = (props: IconProps) => {
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
        <Path d="M247 73.098c-54.26 1.974-69.31 21.918-90.365 44.886-21.25 23.18-48.362 48.605-115.635 50.71v78.208h16v98H41v94h206zm18 0v365.804h206v-94h-16v-98h16v-78.207c-67.273-2.106-94.386-27.53-115.635-50.71C334.31 95.014 319.26 75.07 265 73.097zm-87 45.804h54v18h-54zm102 0h54v18h-54zm-136 32h88v18h-88zm136 0h88v18h-88zm-216 32h168v18H64zm216 0h168v18H280zm-216 32h168v18H64zm216 0h168v18H280zm-208 32h160v18H72zm208 0h160v18H280zm-255 18v62h14v-62zm448 0v62h14v-62zm-401 14h160v18H72zm208 0h160v18H280zm-208 32h160v18H72zm208 0h160v18H280zm-208 32h160v18H64zm208 0h160l8 18H280zm-216 32h168v18H64zm216 0h168v18H280zm-216 32h168v18H64zm216 0h168v18H280z" />
      </G>
    </Svg>
  );
};