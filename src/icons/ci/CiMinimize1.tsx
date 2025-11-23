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

export const CiMinimize1 = (props: IconProps) => {
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
        <Path d="M11 17.78a.5.5 0 0 1-1 0v-3.07l-6.08 6.08a.5.5 0 0 1-.71-.71c.29-.29.58-.57.87-.86C5.82 17.48 7.55 15.74 9.3 14H6.22a.5.5 0 0 1 0-1h4.28a.43.43 0 0 1 .34.14c.01.01.02.01.02.02a.38.38 0 0 1 .13.26ZM14.7 10h3.08a.5.5 0 0 1 0 1H13.5a.43.43 0 0 1-.34-.14c-.01-.01-.02-.01-.02-.02a.38.38 0 0 1-.13-.26L13 6.22a.5.5 0 0 1 1 0v3.07l.01-.01 6.07-6.07a.5.5 0 0 1 .71.71Z" />
      </G>
    </Svg>
  );
};