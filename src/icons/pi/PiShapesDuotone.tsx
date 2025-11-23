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

export const PiShapesDuotone = (props: IconProps) => {
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
        <Path d="m64 64 40 120H24Zm136 12a44 44 0 1 0-44 44 44 44 0 0 0 44-44m-64 76v56h88v-56Z" opacity={0.2} />
        <Path d="M224 144h-88a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8m-8 56h-72v-40h72ZM71.59 61.47a8 8 0 0 0-15.18 0l-40 120A8 8 0 0 0 24 192h80a8 8 0 0 0 7.59-10.53ZM35.1 176 64 89.3 92.9 176ZM208 76a52 52 0 1 0-52 52 52.06 52.06 0 0 0 52-52m-88 0a36 36 0 1 1 36 36 36 36 0 0 1-36-36" />
      </G>
    </Svg>
  );
};