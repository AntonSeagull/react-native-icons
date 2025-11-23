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

export const LiaRev = (props: IconProps) => {
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
        <Path d="M15 3v2.05C9.402 5.559 5 10.274 5 16c0 6.065 4.935 11 11 11h11V16c0-3.367-1.523-6.381-3.914-8.4l-1.863 1.086C23.505 10.32 25 12.986 25 16c0 4.962-4.037 9-9 9s-9-4.038-9-9c0-4.624 3.506-8.442 8-8.941V10l6-3.5zm1 10a3 3 0 0 0 0 6 3 3 0 0 0 0-6" />
      </G>
    </Svg>
  );
};