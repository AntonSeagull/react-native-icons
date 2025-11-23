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

export const LiaToiletSolid = (props: IconProps) => {
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
        <Path d="M6 4c-.523 0-1.059.184-1.437.563C4.183 4.94 4 5.477 4 6v11c0 2.79 1.652 5.117 4 6.594V28h15v-4.406c2.348-1.477 4-3.805 4-6.594v-1H14V6c0-.523-.184-1.059-.562-1.437C13.058 4.183 12.523 4 12 4Zm0 2h6v10H6Zm2 2v3h2V8ZM6.313 18h18.375c-.356 1.727-1.368 3.25-3.157 4.219L21 22.5V26H10v-3.5l-.531-.281C7.679 21.25 6.668 19.727 6.313 18" />
      </G>
    </Svg>
  );
};