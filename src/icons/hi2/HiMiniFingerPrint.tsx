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

export const HiMiniFingerPrint = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 0 1-.82-1.256A8 8 0 0 1 18 9a22.5 22.5 0 0 1-1.228 7.351.75.75 0 1 1-1.417-.49A21 21 0 0 0 16.5 9 6.5 6.5 0 0 0 10 2.5M4.333 4.416a.75.75 0 0 1 .218 1.038A6.47 6.47 0 0 0 3.5 9a7.97 7.97 0 0 1-1.293 4.362.75.75 0 0 1-1.257-.819A6.47 6.47 0 0 0 2 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 0 1 1.038-.219M10 6.12a3 3 0 0 0-3.001 3.041 11.46 11.46 0 0 1-2.697 7.24.75.75 0 0 1-1.148-.965A9.96 9.96 0 0 0 5.5 9q0-.042.004-.082a4.5 4.5 0 0 1 8.996.084v.148l-.005.297a.75.75 0 1 1-1.5-.034q.004-.165.005-.328a3 3 0 0 0-3-2.965m0 2.13a.75.75 0 0 1 .75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 1 1-1.186-.918A13.7 13.7 0 0 0 9.25 9a.75.75 0 0 1 .75-.75m3.529 3.698a.75.75 0 0 1 .584.885 18.9 18.9 0 0 1-2.257 5.84.75.75 0 1 1-1.29-.764 17.4 17.4 0 0 0 2.078-5.377.75.75 0 0 1 .885-.584" clipRule="evenodd" />
      </G>
    </Svg>
  );
};