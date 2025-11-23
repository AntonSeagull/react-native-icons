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

export const CgEditContrast = (props: IconProps) => {
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
        <Path fill="currentColor" d="M12 18a5.98 5.98 0 0 1-4-1.528A5.99 5.99 0 0 1 6 12c0-1.777.773-3.374 2-4.472A5.98 5.98 0 0 1 12 6z" />
        <Path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10 8a8 8 0 1 1 0-16 8 8 0 0 1 0 16" clipRule="evenodd" />
      </G>
    </Svg>
  );
};