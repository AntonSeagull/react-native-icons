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

export const LiaMicroscopeSolid = (props: IconProps) => {
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
        <Path d="M17 4v2h4V4Zm-1 3v2h-2c-2.746 0-5 2.254-5 5v4.188c-1.156.417-2 1.519-2 2.812s.844 2.395 2 2.813V26H7v2h17v-2H11v-2.187A3.02 3.02 0 0 0 12.813 22H24v-2H12.813A3.04 3.04 0 0 0 11 18.188V14a3 3 0 0 1 3-3h2v6h6V7Zm2 2h2v6h-2Zm-8 11c.563 0 1 .438 1 1s-.437 1-1 1-1-.437-1-1 .438-1 1-1" />
      </G>
    </Svg>
  );
};