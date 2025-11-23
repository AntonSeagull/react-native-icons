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

export const CgArrowLongDownC = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M11 6.85a3.001 3.001 0 1 1 2 0l.012 12.288 1.812-1.823 1.419 1.41-4.231 4.255-4.255-4.23 1.41-1.42 1.845 1.835zm.998-1.83a1 1 0 1 1 0-2 1 1 0 0 1 0 2" clipRule="evenodd" />
      </G>
    </Svg>
  );
};