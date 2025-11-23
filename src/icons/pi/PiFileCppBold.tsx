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

export const PiFileCppBold = (props: IconProps) => {
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
        <Path d="M48 180c0 8.67 5.5 16 12 16a10.23 10.23 0 0 0 7.33-3.43 12 12 0 1 1 17.34 16.6A34 34 0 0 1 60 220c-19.85 0-36-17.94-36-40s16.15-40 36-40a34 34 0 0 1 24.67 10.83 12 12 0 1 1-17.34 16.6A10.27 10.27 0 0 0 60 164c-6.5 0-12 7.33-12 16m-12-72V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.51l56 56A12 12 0 0 1 220 88v20a12 12 0 0 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 0 1-24 0m124-51v23h23Zm-12 111h-8v-8a12 12 0 0 0-24 0v8h-8a12 12 0 0 0 0 24h8v8a12 12 0 0 0 24 0v-8h8a12 12 0 0 0 0-24m72 0h-8v-8a12 12 0 0 0-24 0v8h-8a12 12 0 0 0 0 24h8v8a12 12 0 0 0 24 0v-8h8a12 12 0 0 0 0-24" />
      </G>
    </Svg>
  );
};