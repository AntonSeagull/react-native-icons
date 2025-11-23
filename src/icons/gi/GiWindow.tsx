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

export const GiWindow = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M25 66.75V425.8l78-26V92.74zm462 0-78 25.99V399.8l78 26V267.5c-1 3.2-2.4 6.2-4.2 8.8-4.1 6.1-10.7 11-18.8 11s-14.7-4.9-18.8-11-6.2-13.8-6.2-22 2.1-15.9 6.2-22 10.7-11 18.8-11 14.7 4.9 18.8 11c1.8 2.6 3.2 5.6 4.2 8.8zm-366 28.5V397.3h126V95.25zm144 0V397.3h126V95.25zM135 109.3h98v274h-98v-265zm144 0h98v274h-98v-265zm-126 18v110h62v-110zm144 0v110h62v-110zm167 112c-.8 0-2.1.4-3.8 3s-3.2 7-3.2 12 1.5 9.4 3.2 12 3 3 3.8 3 2.1-.4 3.8-3 3.2-7 3.2-12-1.5-9.4-3.2-12-3-3-3.8-3m-311 16v110h62v-110zm144 0v110h62v-110zm-184 160v30h286v-30z" />
      </G>
    </Svg>
  );
};