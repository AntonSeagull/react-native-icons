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

export const PiSubwayLight = (props: IconProps) => {
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
        <Path d="M222 96v112a6 6 0 0 1-12 0V96a58.07 58.07 0 0 0-58-58h-48a58.07 58.07 0 0 0-58 58v112a6 6 0 0 1-12 0V96a70.08 70.08 0 0 1 70-70h48a70.08 70.08 0 0 1 70 70m-40 0v72a22 22 0 0 1-20.33 21.93l3.7 7.39a6 6 0 0 1-10.74 5.36L148.29 190h-40.58l-6.34 12.68a6 6 0 1 1-10.74-5.36l3.7-7.39A22 22 0 0 1 74 168V96a22 22 0 0 1 22-22h64a22 22 0 0 1 22 22m-96 0v50h84V96a10 10 0 0 0-10-10H96a10 10 0 0 0-10 10m32 62v20h20v-20Zm-22 20h10v-20H86v10a10 10 0 0 0 10 10m74-10v-10h-20v20h10a10 10 0 0 0 10-10" />
      </G>
    </Svg>
  );
};