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

export const CgScrollH = (props: IconProps) => {
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
        <Path fill="currentColor" d="M7.182 9.172 5.768 7.757 1.525 12l4.243 4.243 1.414-1.415L4.353 12zM16.818 14.828l1.414 1.415L22.475 12l-4.243-4.243-1.414 1.415L19.646 12z" />
        <Path fill="currentColor" fillRule="evenodd" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};