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

export const LiaRssSquareSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5 5v22h22V5Zm2 2h18v18H7Zm5 3c-.684 0-1.355.055-2 .188v2.062a7.9 7.9 0 0 1 2-.25c4.41 0 8 3.59 8 8q-.002 1.038-.25 2h2.063A10 10 0 0 0 22 20c0-5.516-4.484-10-10-10m0 4a6 6 0 0 0-2 .344v2.219A3.97 3.97 0 0 1 12 16c2.207 0 4 1.793 4 4 0 .73-.219 1.41-.562 2h2.218A6 6 0 0 0 18 20c0-3.309-2.691-6-6-6m0 4a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4" />
      </G>
    </Svg>
  );
};