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

export const LiaEuroSignSolid = (props: IconProps) => {
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
        <Path d="M18 4c-4.738 0-8.586 3.887-9.687 9H6v2h2.063c-.024.328-.063.664-.063 1s.04.672.063 1H6v2h2.313c1.101 5.113 4.949 9 9.687 9 2.707 0 5.168-1.305 6.938-3.344l-1.532-1.312C21.953 25.02 20.07 26 18 26c-3.504 0-6.59-2.898-7.625-7H19v-2h-8.969c-.027-.332-.031-.66-.031-1s.004-.668.031-1H19v-2h-8.625C11.41 8.898 14.496 6 18 6c2.07 0 3.953.98 5.406 2.656l1.532-1.312C23.168 5.304 20.707 4 18 4" />
      </G>
    </Svg>
  );
};