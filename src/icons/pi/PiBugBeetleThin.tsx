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

export const PiBugBeetleThin = (props: IconProps) => {
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
        <Path d="M204 148h20a4 4 0 0 0 0-8h-20v-24h20a4 4 0 0 0 0-8h-20.11a75.8 75.8 0 0 0-23.37-50.86l22.31-22.31a4 4 0 1 0-5.66-5.66L174.44 51.9a75.77 75.77 0 0 0-92.88 0L58.83 29.17a4 4 0 0 0-5.66 5.66l22.31 22.31A75.8 75.8 0 0 0 52.11 108H32a4 4 0 0 0 0 8h20v24H32a4 4 0 0 0 0 8h20v12a75.4 75.4 0 0 0 1 12H32a4 4 0 0 0 0 8h22.69a76 76 0 0 0 146.62 0H224a4 4 0 0 0 0-8h-21a75.4 75.4 0 0 0 1-12ZM128 44a68.08 68.08 0 0 1 67.87 64H60.13A68.08 68.08 0 0 1 128 44m4 183.87V144a4 4 0 0 0-8 0v83.87A68.08 68.08 0 0 1 60 160v-44h136v44a68.08 68.08 0 0 1-64 67.87" />
      </G>
    </Svg>
  );
};