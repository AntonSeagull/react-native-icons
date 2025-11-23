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

export const CgMicrobit = (props: IconProps) => {
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
        <Path fill="currentColor" d="M7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M19 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
        <Path fill="currentColor" fillRule="evenodd" d="M7 5a7 7 0 0 0 0 14h10a7 7 0 1 0 0-14zm10 3H7a4 4 0 1 0 0 8h10a4 4 0 0 0 0-8" clipRule="evenodd" />
      </G>
    </Svg>
  );
};