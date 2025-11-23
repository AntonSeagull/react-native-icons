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

export const TbMoodPlus = (props: IconProps) => {
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
        <Path d="M20.985 12.528a9 9 0 1 0-8.45 8.456M16 19h6M19 16v6M9 10h.01M15 10h.01" />
        <Path d="M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1" />
      </G>
    </Svg>
  );
};