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

export const PiCubeTransparentBold = (props: IconProps) => {
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
        <Path d="m224.5 95.53-64-64A12 12 0 0 0 152 28H40a12 12 0 0 0-12 12v112a11.94 11.94 0 0 0 3 7.93c.15.18.31.36.5.56l64 64A12 12 0 0 0 104 228h112a12 12 0 0 0 12-12V104a12 12 0 0 0-3.5-8.47M164 69l23 23h-23ZM92 187l-23-23h23Zm0-47H52V69l40 40ZM69 52h71v40h-31Zm71 64v24h-24v-24Zm-24 88v-40h31l40 40Zm88-17-40-40v-31h40Z" />
      </G>
    </Svg>
  );
};