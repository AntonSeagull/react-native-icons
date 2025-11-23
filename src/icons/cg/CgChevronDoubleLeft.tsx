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

export const CgChevronDoubleLeft = (props: IconProps) => {
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
        <Path fill="currentColor" d="M18.364 7.757 16.95 6.343 11.293 12l5.657 5.657 1.414-1.414L14.12 12z" />
        <Path fill="currentColor" d="m11.293 6.343 1.414 1.414L8.464 12l4.243 4.243-1.414 1.414L5.636 12z" />
      </G>
    </Svg>
  );
};