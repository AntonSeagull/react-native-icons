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

export const Imnner = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M6 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 2m4.243 1.757a2 2 0 1 1 3.999-.001 2 2 0 0 1-3.999.001M13 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.757 4.243a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7 14a1 1 0 0 1 2 0 1 1 0 0 1-2 0m-4.243-1.757a1 1 0 0 1 2 0 1 1 0 0 1-2 0m-.5-8.486a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0M.875 8a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0" />
      </G>
    </Svg>
  );
};