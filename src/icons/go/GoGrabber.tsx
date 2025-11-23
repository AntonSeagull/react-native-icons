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

export const GoGrabber = (props: IconProps) => {
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
        <Path d="M9 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2m6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
      </G>
    </Svg>
  );
};