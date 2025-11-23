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

export const RiChatUnreadFill = (props: IconProps) => {
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
        <Path d="M21 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 2q.515 0 1-.1V18a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h13.1q-.1.486-.1 1a5 5 0 0 0 5 5" />
      </G>
    </Svg>
  );
};