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

export const SiWebrtc = (props: IconProps) => {
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
        <Path d="M12 .36A5.4 5.4 0 0 0 6.62 5.3a5.4 5.4 0 0 0-1.22-.14 5.4 5.4 0 0 0-2.143 10.357 5.4 5.4 0 0 0-.737 2.723 5.4 5.4 0 0 0 9.54 3.466 5.4 5.4 0 0 0 8.833-6.137 5.4 5.4 0 0 0-3.505-10.152A5.4 5.4 0 0 0 12 .36M6.283 7.228h10.592c.746 0 1.352.605 1.352 1.349v7.646c0 .744-.606 1.348-1.352 1.348h-3.608l-7.24 3.55 1.1-3.55h-.844a1.35 1.35 0 0 1-1.352-1.348V8.577c0-.744.606-1.349 1.352-1.349" />
      </G>
    </Svg>
  );
};