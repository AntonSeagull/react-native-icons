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

export const TbHomeCog = (props: IconProps) => {
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
        <Path d="M9 21v-6a2 2 0 0 1 2-2h1.6" />
        <Path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h4.159M16 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M18 14.5V16M18 20v1.5M21.032 16.25l-1.299.75M16.27 19l-1.3.75M14.97 16.25l1.3.75M19.733 19l1.3.75" />
      </G>
    </Svg>
  );
};