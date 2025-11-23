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

export const CgLinear = (props: IconProps) => {
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
        <Path fill="currentColor" d="M3.035 12.943a8.96 8.96 0 0 0 2.587 5.421 8.96 8.96 0 0 0 5.42 2.587zM3 11.494l9.492 9.492a9 9 0 0 0 2.378-.459L3.46 9.115A9 9 0 0 0 3 11.494M3.867 8.11l12.009 12.009a9 9 0 0 0 1.773-1.123L4.99 6.336A9 9 0 0 0 3.867 8.11M5.663 5.595a9 9 0 0 1 12.728 12.728z" />
      </G>
    </Svg>
  );
};