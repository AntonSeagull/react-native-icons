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

export const LiaFacebookSquare = (props: IconProps) => {
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
        <Path d="M7 5c-1.094 0-2 .906-2 2v18c0 1.094.906 2 2 2h18c1.094 0 2-.906 2-2V7c0-1.094-.906-2-2-2Zm0 2h18v18h-5.187v-6.75h2.593l.375-3h-2.968v-1.937c0-.876.214-1.47 1.468-1.47h1.625V9.126c-.277-.035-1.238-.094-2.343-.094-2.305 0-3.875 1.387-3.875 3.969v2.25h-2.625v3h2.624V25H7Z" />
      </G>
    </Svg>
  );
};