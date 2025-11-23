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

export const LiaFlaskSolid = (props: IconProps) => {
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
        <Path d="M17 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m-3 3c-.55 0-1 .45-1 1h-3v2h1v7.656l-6.156 7.938A3.98 3.98 0 0 0 4 24.03 3.98 3.98 0 0 0 7.969 28H24.03A3.98 3.98 0 0 0 28 24.031c0-.883-.3-1.738-.844-2.437L21 13.656V6h1V4h-7c0-.55-.45-1-1-1m-1 3h6v8.344L21.844 18H10.156L13 14.344Zm4 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M8.594 20h14.812l2.188 2.813c.27.347.406.78.406 1.218A1.946 1.946 0 0 1 24.031 26H7.97A1.946 1.946 0 0 1 6 24.031c0-.437.137-.87.406-1.218Z" />
      </G>
    </Svg>
  );
};