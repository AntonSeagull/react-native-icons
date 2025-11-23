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

export const SiDtube = (props: IconProps) => {
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
        <Path d="M0 1.642v20.716h8.516c1.313 0 2.488-.158 3.537-.476a8.8 8.8 0 0 0 2.787-1.408q1.73-1.336 2.668-3.465c.614-1.42.931-3.049.931-4.881-.01-1.578-.243-3.02-.709-4.313s-1.111-2.392-1.959-3.302c-.836-.911-1.853-1.611-3.029-2.12-1.176-.497-2.478-.751-3.908-.751zM5.201 7.35l8.04 4.66-8.04 4.648zm15.992 9.162a2.716 2.716 0 0 0-2.71 2.71 2.716 2.716 0 0 0 2.71 2.712h.096A2.716 2.716 0 0 0 24 19.224a2.716 2.716 0 0 0-2.711-2.711z" />
      </G>
    </Svg>
  );
};