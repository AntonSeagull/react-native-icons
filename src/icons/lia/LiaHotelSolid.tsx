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

export const LiaHotelSolid = (props: IconProps) => {
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
        <Path d="M10 4 8 6l2 2 2-2Zm2 2 2 2 2-2-2-2Zm4 0 2 2 2-2-2-2Zm4 0 2 2 2-2-2-2Zm2 2H5v20h22V8ZM7 10h18v16h-6v-5h-6v5H7Zm2 2v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2ZM9 15v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2ZM9 18v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2ZM9 21v2h2v-2Zm12 0v2h2v-2Zm-6 2h2v3h-2Z" />
      </G>
    </Svg>
  );
};