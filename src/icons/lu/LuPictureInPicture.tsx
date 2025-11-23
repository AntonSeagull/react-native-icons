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

export const LuPictureInPicture = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M2 10h6V4M2 4l6 6M21 10V7a2 2 0 0 0-2-2h-7M3 14v2a2 2 0 0 0 2 2h3" />
        <Rect width={10} height={7} x={12} y={14} rx={1} />
      </G>
    </Svg>
  );
};