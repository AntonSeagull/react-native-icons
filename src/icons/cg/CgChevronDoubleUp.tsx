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

export const CgChevronDoubleUp = (props: IconProps) => {
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
        <Path fill="currentColor" d="m17.657 11.293-1.414 1.414L12 8.464l-4.243 4.243-1.414-1.414L12 5.636z" />
        <Path fill="currentColor" d="m17.657 16.95-1.414 1.414L12 14.12l-4.243 4.243-1.414-1.414L12 11.293z" />
      </G>
    </Svg>
  );
};