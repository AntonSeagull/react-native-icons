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

export const PiWindowsLogoThin = (props: IconProps) => {
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
        <Path d="M208 140h-80a4 4 0 0 0-4 4v57.45a4 4 0 0 0 3.28 3.94l80 14.55a4.4 4.4 0 0 0 .72.06 4 4 0 0 0 2.56-.93A4 4 0 0 0 212 216v-72a4 4 0 0 0-4-4m-4 71.21-72-13.09V148h72ZM96 140H32a4 4 0 0 0-4 4v40a4 4 0 0 0 3.28 3.94l64 11.63a3.5 3.5 0 0 0 .72.07 4 4 0 0 0 4-4V144a4 4 0 0 0-4-4m-4 50.84-56-10.18V148h56ZM210.56 36.93a4 4 0 0 0-3.28-.87l-80 14.55a4 4 0 0 0-3.28 3.94V112a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4V40a4 4 0 0 0-1.44-3.07M204 108h-72V57.88l72-13.09ZM95.28 56.43l-64 11.63A4 4 0 0 0 28 72v40a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4V60.36a4 4 0 0 0-4.72-3.93M92 108H36V75.34l56-10.18Z" />
      </G>
    </Svg>
  );
};