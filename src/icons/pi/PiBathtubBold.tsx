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

export const PiBathtubBold = (props: IconProps) => {
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
        <Path d="M240 92h-28.7a12 12 0 0 0-11.3-8h-64a12 12 0 0 0-11.3 8H68V52a8 8 0 0 1 8-8 8.5 8.5 0 0 1 8.24 6.39 12 12 0 0 0 23.52-4.78A32.22 32.22 0 0 0 44 52v40H16a12 12 0 0 0-12 12v40a60.07 60.07 0 0 0 56 59.85V216a12 12 0 0 0 24 0v-12h88v12a12 12 0 0 0 24 0v-12.15A60.07 60.07 0 0 0 252 144v-40a12 12 0 0 0-12-12m-92 16h40v24h-40Zm80 36a36 36 0 0 1-36 36H64a36 36 0 0 1-36-36v-28h96v28a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-28h16Z" />
      </G>
    </Svg>
  );
};