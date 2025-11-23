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

export const LiaUserTagSolid = (props: IconProps) => {
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
        <Path d="M16 5c-3.9 0-7 3.1-7 7a6.96 6.96 0 0 0 3.07 5.813C8.51 19.347 6 22.893 6 27h2c0-4.4 3.6-8 8-8 3.9 0 7-3.1 7-7s-3.1-7-7-7m0 2c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5m5 12c-1.1 0-2 .9-2 2v4.4l6 6c.4.4.9.6 1.4.6s1-.2 1.4-.6l3.6-3.6c.4-.4.6-.9.6-1.4s-.2-1-.6-1.4l-6-6zm0 2h3.6l5.4 5.4-3.6 3.6-5.4-5.4zm2 1a1 1 0 0 0 0 2 1 1 0 0 0 0-2" />
      </G>
    </Svg>
  );
};