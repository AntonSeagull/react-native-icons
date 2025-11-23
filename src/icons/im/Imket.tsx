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

export const Imket = (props: IconProps) => {
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
        <Path d="m9 5 2 2-4 4-2-2zm6.649-.351L14.5 3.5 14 4a1.414 1.414 0 1 1-1.999-2l.5-.5L11.352.351a1.21 1.21 0 0 0-1.703 0L.352 9.648a1.21 1.21 0 0 0 0 1.703L1.501 12.5 2 12.001A1.414 1.414 0 1 1 4 14l-.5.5 1.149 1.149a1.21 1.21 0 0 0 1.703 0l9.297-9.297a1.21 1.21 0 0 0 0-1.703M7 13 3 9l6-6 4 4z" />
      </G>
    </Svg>
  );
};