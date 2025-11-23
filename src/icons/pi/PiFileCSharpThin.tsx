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

export const PiFileCSharpThin = (props: IconProps) => {
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
        <Path d="M44 180c0 13.23 9 24 20 24a18.15 18.15 0 0 0 13.11-5.9 4 4 0 1 1 5.78 5.54A26.1 26.1 0 0 1 64 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a26.1 26.1 0 0 1 18.89 8.36 4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 64 156c-11 0-20 10.77-20 24m168-92v136a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.65Zm8 80v24h12a4 4 0 0 1 0 8h-12v12a4 4 0 0 1-8 0v-12h-24v12a4 4 0 0 1-8 0v-12h-12a4 4 0 0 1 0-8h12v-24h-12a4 4 0 0 1 0-8h12v-12a4 4 0 0 1 8 0v12h24v-12a4 4 0 0 1 8 0v12h12a4 4 0 0 1 0 8Zm-8 0h-24v24h24Z" />
      </G>
    </Svg>
  );
};