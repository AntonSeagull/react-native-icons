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

export const GiJoystick = (props: IconProps) => {
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
        <Path d="M307.723 39.623c-25.627-.292-48.63 17.365-54.246 43.44-6.418 29.8 12.39 58.93 42.19 65.347 29.798 6.417 58.927-12.39 65.345-42.19 6.417-29.798-12.39-58.928-42.188-65.345a55.8 55.8 0 0 0-11.1-1.252zm-37.543 117.88L237.123 311h47.055l30.97-143.81a72.55 72.55 0 0 1-44.968-9.686zM198.486 329l-10 30h135.028l-10-30zM73 377v30h30v-30zm93.486 0-10 30h199.028l-10-30zM409 377v30h30v-30zM57 425v62h398v-62z" />
      </G>
    </Svg>
  );
};