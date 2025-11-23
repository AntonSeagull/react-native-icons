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

export const PiFileCThin = (props: IconProps) => {
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
        <Path d="M44 180c0 13.23 9 24 20 24a18.15 18.15 0 0 0 13.11-5.9 4 4 0 1 1 5.78 5.54A26.1 26.1 0 0 1 64 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a26.1 26.1 0 0 1 18.89 8.36 4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 64 156c-11 0-20 10.77-20 24m168-92v128a12 12 0 0 1-12 12h-80a4 4 0 0 1 0-8h80a4 4 0 0 0 4-4V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.65Z" />
      </G>
    </Svg>
  );
};