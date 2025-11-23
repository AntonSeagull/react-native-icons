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

export const LiaStackExchange = (props: IconProps) => {
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
        <Path d="M9 4C6.8 4 5 5.8 5 8v14c0 2.2 1.8 4 4 4h8v4.219h1.563l.312-.313L22.563 26H23c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4Zm0 2h14c1.117 0 2 .883 2 2v1H7V8c0-1.117.883-2 2-2m-2 5h18v3H7Zm0 5h18v3H7Zm0 5h18v1c0 1.117-.883 2-2 2h-1.312l-.282.313L19 26.843V24H9c-1.117 0-2-.883-2-2Z" />
      </G>
    </Svg>
  );
};