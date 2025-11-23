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

export const CgSync = (props: IconProps) => {
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
        <Path fill="currentColor" d="M4.56 10.642 6.355 3.95l1.9 1.9c3.477-2.191 8.127-1.772 11.156 1.256l-1.414 1.415a7 7 0 0 0-8.28-1.21l1.537 1.538zM19.44 13.358l-1.794 6.692-1.9-1.9A9 9 0 0 1 4.59 16.894l1.414-1.415a7 7 0 0 0 8.28 1.21l-1.537-1.538z" />
      </G>
    </Svg>
  );
};