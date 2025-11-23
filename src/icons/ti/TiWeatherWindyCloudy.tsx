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

export const TiWeatherWindyCloudy = (props: IconProps) => {
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
        <Path d="M4.798 15.75a1 1 0 0 1-.4-.084A4 4 0 0 1 2 12a4.01 4.01 0 0 1 3.001-3.874L5 8c0-3.309 2.691-6 6-6a5.974 5.974 0 0 1 5.902 5.001 1 1 0 0 1-.82 1.152 1.007 1.007 0 0 1-1.152-.82A3.98 3.98 0 0 0 11 4a4.004 4.004 0 0 0-3.919 4.812l.259 1.27-1.431-.088C4.897 10 4 10.897 4 12c0 .795.471 1.515 1.2 1.834a1 1 0 0 1-.402 1.916M19 7a1 1 0 1 0 0 2 1 1 0 0 1 0 2H9.4a1 1 0 1 0 0 2H14a1 1 0 0 1 0 2H9c-1.654 0-3 1.346-3 3s1.346 3 3 3a1 1 0 1 0 0-2 1 1 0 0 1 0-2h5c1.654 0 3-1.346 3-3 0-.353-.072-.686-.185-1H19c1.654 0 3-1.346 3-3s-1.346-3-3-3" />
      </G>
    </Svg>
  );
};