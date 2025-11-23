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

export const RiBlazeLine = (props: IconProps) => {
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
        <Path d="M19 9q1 1.59 1 4c0 3-3.5 4-5 9q-1-.862-1-2.5c0-3.482 5-5.29 5-10.5m-4.5-4a8.3 8.3 0 0 1 1 4c0 5-6 6-4 13Q9 20.26 9 17c0-3.325 5.5-6 5.5-12M10 1q1 2 1 4.5c0 6-9 7.5-3 16.5-2.5-.5-4.5-3-4.5-6C3.5 9.5 10 8.5 10 1" />
      </G>
    </Svg>
  );
};