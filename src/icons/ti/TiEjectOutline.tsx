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

export const TiEjectOutline = (props: IconProps) => {
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
        <Path d="M16 8.551V7a2 2 0 0 0-2-2H4v10a2 2 0 0 0 2 2h1.066c.893 2.887 3.646 5 6.809 5 3.859 0 7.062-3.016 7.062-6.875.001-3.161-2.068-5.74-4.937-6.574m-8 1.862v3.243a1 1 0 0 1-2 0V7h6.656a1 1 0 0 1 0 2H9.413l4.801 4.799a1 1 0 0 1-.707 1.707 1 1 0 0 1-.707-.291zm6 9.618c-2.757 0-5-2.26-5-5.016 0-.705-.004-1.371.21-1.979l2.883 2.884c.39.39.901.584 1.414.584s1.022-.194 1.414-.584a2 2 0 0 0 0-2.83l-2.567-2.567c.517-.226 1.065-.398 1.646-.398 2.757 0 5 2.182 5 4.938 0 2.757-2.243 4.968-5 4.968" />
      </G>
    </Svg>
  );
};