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

export const BiLeftTopArrowCircle = (props: IconProps) => {
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
        <Path d="M11.993 2.007a9.93 9.93 0 0 0-7.071 2.922c-3.899 3.899-3.899 10.243 0 14.143a9.93 9.93 0 0 0 7.071 2.923 9.93 9.93 0 0 0 7.071-2.923c3.899-3.899 3.899-10.243 0-14.143a9.93 9.93 0 0 0-7.071-2.922m5.657 15.65a7.95 7.95 0 0 1-5.657 2.337c-2.141 0-4.15-.83-5.657-2.337-3.119-3.119-3.119-8.195 0-11.314a7.95 7.95 0 0 1 5.657-2.336c2.142 0 4.15.829 5.657 2.336 3.12 3.119 3.12 8.195 0 11.314" />
        <Path d="M14.657 9H8.993v5.663l2.125-2.124 3.215 3.214 1.414-1.414-3.215-3.214z" />
      </G>
    </Svg>
  );
};