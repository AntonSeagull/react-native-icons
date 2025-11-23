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

export const LiaPenFancySolid = (props: IconProps) => {
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
        <Path d="M23.813 4.031c-1.09 0-2.2.418-3.032 1.25L11.5 14.563l-5.469 2.093-.531.219-.094.563L4 26.844l-.187 1.343L5.156 28l9.407-1.406.562-.094.219-.531 1.969-5.188.5-.468 9-9c1.613-1.614 1.644-4.204.125-5.876l-.125-.156a4.22 4.22 0 0 0-3-1.25m0 1.969c.562 0 1.125.25 1.593.719.938.937.938 2.25 0 3.187l-5.031 5.031-3.187-3.187 5.03-5.031C22.689 6.25 23.25 6 23.814 6m-8.063 7.188 3.188 3.187-1.813 1.813L13.938 15Zm-3.344 3.156h.031l3.22 3.218-1.97 5.157-5.843.843 2.687-2.687c.055.004.102.031.156.031.883 0 1.626-.71 1.626-1.593s-.743-1.625-1.626-1.625-1.593.742-1.593 1.625c0 .054.027.101.031.156l-2.687 2.687.843-5.843Z" />
      </G>
    </Svg>
  );
};