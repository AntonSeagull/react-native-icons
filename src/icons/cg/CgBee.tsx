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

export const CgBee = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M17.951 15.571a6 6 0 0 1-2.27 4.064 4 4 0 0 1-1.756 1.96 2 2 0 0 1-3.874 0 4 4 0 0 1-1.756-1.96 6 6 0 0 1-2.269-4.047 3.001 3.001 0 0 1-4.11-4.32L6.01 6.39a6 6 0 0 1 11.953-.033l4.12 4.91a3 3 0 0 1-4.132 4.304m-2.326-2.665-1.678-2h-3.894l-1.678 2zm2.363-.296 1.032 1.229a1 1 0 1 0 1.532-1.286l-2.564-3.055zm-2-3.704v-2a4 4 0 0 0-8 0v2zM4.98 13.839l1.007-1.2V9.527l-2.54 3.027a1 1 0 1 0 1.533 1.285m7.007 5.067a4 4 0 0 1-4-4h8a4 4 0 0 1-4 4" clipRule="evenodd" />
      </G>
    </Svg>
  );
};