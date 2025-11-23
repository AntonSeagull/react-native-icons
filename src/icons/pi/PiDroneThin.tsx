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

export const PiDroneThin = (props: IconProps) => {
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
        <Path d="M186.83 74.83a4 4 0 1 0-5.66-5.66L150.34 100h-44.68L74.83 69.17a4 4 0 0 0-5.66 5.66L100 105.66v44.68l-30.83 30.83a4 4 0 0 0 5.66 5.66L105.66 156h44.68l30.83 30.83a4 4 0 0 0 5.66-5.66L156 150.34v-44.68ZM108 108h40v40h-40Zm34.28-45.33a40 40 0 1 1 51.05 51.05 3.9 3.9 0 0 1-1.33.28 4 4 0 0 1-1.33-7.77 32 32 0 1 0-40.85-40.85 4 4 0 1 1-7.54-2.66ZM220 180a40 40 0 0 1-77.72 13.33 4 4 0 1 1 7.54-2.66 32 32 0 1 0 40.85-40.85 4 4 0 0 1 2.66-7.54A40.06 40.06 0 0 1 220 180m-106.28 13.33a40 40 0 1 1-51-51.05 4 4 0 0 1 2.66 7.54 32 32 0 1 0 40.85 40.85 4 4 0 0 1 7.54 2.66ZM36 76a40 40 0 0 1 77.72-13.33 4 4 0 0 1-7.54 2.66 32 32 0 1 0-40.85 40.85A4 4 0 0 1 64 114a3.9 3.9 0 0 1-1.33-.23A40.06 40.06 0 0 1 36 76" />
      </G>
    </Svg>
  );
};