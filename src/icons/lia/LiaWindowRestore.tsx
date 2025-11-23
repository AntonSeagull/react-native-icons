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

export const LiaWindowRestore = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5Zm2 2h18v18H7Zm5 2v4H9v10h11v-4h3V9Zm2 2h7v1h-7Zm0 3h7v3h-7Zm-3 1h1v1.031h-1Zm0 3.031h1V19h6v2h-7Z" />
      </G>
    </Svg>
  );
};