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

export const PiJoystickBold = (props: IconProps) => {
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
        <Path d="M208 144h-68V98.32a44 44 0 1 0-24 0V144H48a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-44a20 20 0 0 0-20-20M108 56a20 20 0 1 1 20 20 20 20 0 0 1-20-20m96 148H52v-36h152Zm-32-100h32a12 12 0 0 1 0 24h-32a12 12 0 0 1 0-24" />
      </G>
    </Svg>
  );
};