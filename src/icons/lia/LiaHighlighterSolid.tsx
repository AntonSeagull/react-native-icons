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

export const LiaHighlighterSolid = (props: IconProps) => {
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
        <Path d="m23.625 3.063-.719.624L7.563 17l-.5.469.25.656s1.125 3-1.032 5.156v.032l-.031.03-.156.188-.125.125L2 27.531 7.375 29l2.063-2.062.218-.188.031-.031h.032c2.156-2.157 5.156-1.032 5.156-1.032l.656.25.469-.5 13.313-15.343.625-.719Zm-.125 2.75L27.188 9.5l-8.75 10.063-5-5ZM11.938 15.875l5.187 5.188-1.937 2.25-5.5-5.5ZM9.562 20.5l2.938 2.938c-1.242.046-2.746.437-4.156 1.812-.02.02-.043.012-.063.031l-.25.219-.531-.531.219-.25.031-.063c1.375-1.41 1.766-2.914 1.813-4.156" />
      </G>
    </Svg>
  );
};