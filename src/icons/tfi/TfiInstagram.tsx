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

export const TfiInstagram = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M13 0H4C1.8 0 0 1.8 0 4v9c0 2.2 1.8 4 4 4h9c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4m3 13c0 1.654-1.346 3-3 3H4c-1.654 0-3-1.346-3-3V7h3.207a4.7 4.7 0 0 0-.457 2c0 2.619 2.131 4.75 4.75 4.75s4.75-2.131 4.75-4.75c0-.717-.171-1.39-.457-2H16zm-3.75-4c0 2.068-1.682 3.75-3.75 3.75S4.75 11.068 4.75 9 6.432 5.25 8.5 5.25 12.25 6.932 12.25 9m-.098-3C11.28 4.941 9.976 4.25 8.5 4.25S5.72 4.941 4.848 6H1V4c0-1.654 1.346-3 3-3h9c1.654 0 3 1.346 3 3v2zm2.302-3.278V4.02a.544.544 0 0 1-.542.543h-1.368A.546.546 0 0 1 12 4.02V2.722c0-.299.244-.543.544-.543h1.368c.298 0 .542.244.542.543" />
      </G>
    </Svg>
  );
};