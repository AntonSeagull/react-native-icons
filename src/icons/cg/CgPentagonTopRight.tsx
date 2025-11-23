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

export const CgPentagonTopRight = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M10.33 15.16 5 14.392l5-8.66 5.33.768 3.33 4.232-5 8.66zm3.075.674-1.998-2.54-3.198-.46 2.846-4.93 3.198.461 1.998 2.54z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};