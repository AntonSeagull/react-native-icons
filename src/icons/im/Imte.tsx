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

export const Imte = (props: IconProps) => {
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
        <Path d="M11 2H9V1c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H3v2h8zM8 2H6v-.998L6.002 1h1.996L8 1.002zm5 3V2.5c0-.275-.225-.5-.5-.5h-1v1h.5v2H9L6 8v4H2V3h.5V2h-1c-.275 0-.5.225-.5.5v10c0 .275.225.5.5.5H6v3h10V5zM9 6.414V8H7.414zM15 15H7V9h3V6h5z" />
      </G>
    </Svg>
  );
};