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

export const PiCourtBasketballDuotone = (props: IconProps) => {
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
        <Path d="M232 88v80h-16a40 40 0 0 1 0-80ZM40 88H24v80h16a40 40 0 0 0 0-80" opacity={0.2} />
        <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 112h-8a32 32 0 0 1 0-64h8ZM32 96h8a32 32 0 0 1 0 64h-8Zm0 80h8a48 48 0 0 0 0-96h-8V64h88v128H32Zm192 16h-88V64h88v16h-8a48 48 0 0 0 0 96h8z" />
      </G>
    </Svg>
  );
};