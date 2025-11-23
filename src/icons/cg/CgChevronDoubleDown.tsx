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

export const CgChevronDoubleDown = (props: IconProps) => {
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
        <Path fill="currentColor" d="M7.757 5.636 6.343 7.05 12 12.707l5.657-5.657-1.414-1.414L12 9.88z" />
        <Path fill="currentColor" d="m6.343 12.707 1.414-1.414L12 15.536l4.243-4.243 1.414 1.414L12 18.364z" />
      </G>
    </Svg>
  );
};