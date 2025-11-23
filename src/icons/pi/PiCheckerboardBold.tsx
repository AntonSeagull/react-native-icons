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

export const PiCheckerboardBold = (props: IconProps) => {
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
        <Path d="M228 48a20 20 0 0 0-20-20H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20Zm-35 68-53-53V52h11l53 53v11Zm-53-19 19 19h-19Zm64-26-19-19h19Zm-88-19v64H52V52Zm-11 152-53-53v-11h11l53 53v11Zm11-45-19-19h19Zm-64 26 19 19H52Zm88 19v-64h64v64Z" />
      </G>
    </Svg>
  );
};