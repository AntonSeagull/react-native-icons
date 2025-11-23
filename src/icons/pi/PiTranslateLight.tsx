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

export const PiTranslateLight = (props: IconProps) => {
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
        <Path d="m245.37 213.32-56-112a6 6 0 0 0-10.74 0l-22.3 44.6A90 90 0 0 1 105 127.19 101.73 101.73 0 0 0 133.82 62H160a6 6 0 0 0 0-12h-58V32a6 6 0 0 0-12 0v18H32a6 6 0 0 0 0 12h89.79A89.7 89.7 0 0 1 96 119.23 89.8 89.8 0 0 1 75.11 86a6 6 0 1 0-11.31 4A101.7 101.7 0 0 0 87 127.2 89.56 89.56 0 0 1 32 146a6 6 0 0 0 0 12 101.55 101.55 0 0 0 64-22.63 102.1 102.1 0 0 0 54.53 22.17l-27.89 55.78a6 6 0 0 0 10.74 5.36L147.71 190h72.58l14.34 28.68A6 6 0 0 0 240 222a5.9 5.9 0 0 0 2.68-.64 6 6 0 0 0 2.69-8.04M153.71 178 184 117.42 214.29 178Z" />
      </G>
    </Svg>
  );
};