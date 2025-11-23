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

export const Imt2 = (props: IconProps) => {
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
        <Path d="M6 1h10v2H6zm0 6h10v2H6zm0 6h10v2H6zM0 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 0 2m0 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 0 8m0 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 0 14" />
      </G>
    </Svg>
  );
};