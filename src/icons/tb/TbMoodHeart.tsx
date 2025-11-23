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

export const TbMoodHeart = (props: IconProps) => {
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
        <Path d="M21 12a9 9 0 1 0-8.012 8.946M9 10h.01M15 10h.01" />
        <Path d="M9.5 15a3.6 3.6 0 0 0 2.774.99M18.994 21.5l2.518-2.58a1.74 1.74 0 0 0 .004-2.413 1.627 1.627 0 0 0-2.346-.005l-.168.172-.168-.172a1.627 1.627 0 0 0-2.346-.004 1.74 1.74 0 0 0-.004 2.412z" />
      </G>
    </Svg>
  );
};