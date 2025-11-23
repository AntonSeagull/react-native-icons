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

export const LiaPoundSignSolid = (props: IconProps) => {
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
        <Path d="M17.688 5c-.27 0-.547.027-.813.063C13.699 5.477 11 8.203 11 11.656c0 1.13.281 2.242.656 3.344H9v2h3.406c.2.555.36 1.102.5 1.656.563 2.207.621 4.184-1.375 6.344H8v2h16v-5h-2v3h-7.937c1.39-2.305 1.316-4.746.78-6.844-.1-.398-.226-.773-.343-1.156H20v-2h-6.156C13.39 13.691 13 12.531 13 11.656c0-3.23 3.3-5.543 6.375-4.312l.75-1.844c-.816-.324-1.629-.5-2.437-.5" />
      </G>
    </Svg>
  );
};