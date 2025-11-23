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

export const LiaKeyboardSolid = (props: IconProps) => {
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
        <Path d="M3 7c-1.094 0-2 .906-2 2v14c0 1.094.906 2 2 2h26c1.094 0 2-.906 2-2V9c0-1.094-.906-2-2-2Zm0 2h26v14H3Zm2 2v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2ZM5 15v2h4v-2Zm6 0v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm4 0v2h4v-2ZM5 19v2h4v-2Zm6 0v2h10v-2Zm12 0v2h4v-2Z" />
      </G>
    </Svg>
  );
};