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

export const CgBoy = (props: IconProps) => {
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
        <Path fill="currentColor" d="M9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        <Path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-2a8 8 0 0 0 7.634-10.4c-.835.226-1.713.346-2.619.346a10 10 0 0 1-8.692-5.053A8 8 0 0 0 12 20" clipRule="evenodd" />
      </G>
    </Svg>
  );
};