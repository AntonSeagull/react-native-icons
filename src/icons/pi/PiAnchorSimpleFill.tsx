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

export const PiAnchorSimpleFill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M232 120a104 104 0 0 1-208 0 8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H40.36A88.15 88.15 0 0 0 120 207.63V90.83a28 28 0 1 1 16 0v116.8A88.15 88.15 0 0 0 215.64 128H200a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8" />
      </G>
    </Svg>
  );
};