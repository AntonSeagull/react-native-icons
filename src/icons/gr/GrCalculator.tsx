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

export const GrCalculator = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M22 23H2V1h20zm-6-6h2v2h-2zm-5 0h2v2h-2zm5-5h2v2h-2zm-5 0h2v2h-2zm-5 5h2v2H6zm0-5h2v2H6zm12-3H6V5h12z" />
      </G>
    </Svg>
  );
};