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

export const TbMoodWink = (props: IconProps) => {
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
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M15 10h.01" />
        <Path d="M9.5 15a3.5 3.5 0 0 0 5 0M8.5 8.5 10 10l-1.5 1.5" />
      </G>
    </Svg>
  );
};