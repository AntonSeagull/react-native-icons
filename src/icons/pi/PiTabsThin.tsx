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

export const PiTabsThin = (props: IconProps) => {
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
        <Path d="m251.81 166.86-22.29-74.3A11.92 11.92 0 0 0 218.05 84H208a4 4 0 0 0 0 8h10.05a4 4 0 0 1 3.83 2.85L242.62 164H203l-21.46-71.45A11.92 11.92 0 0 0 170.05 84H160a4 4 0 0 0 0 8h10.05a4 4 0 0 1 3.83 2.85L194.62 164H155l-21.46-71.45A11.92 11.92 0 0 0 122.05 84H38a11.92 11.92 0 0 0-11.49 8.55l-22.34 74.3v.17A4 4 0 0 0 8 172h240a4 4 0 0 0 4-4 3.9 3.9 0 0 0-.19-1.14m-217.69-72A4 4 0 0 1 38 92h84.1a4 4 0 0 1 3.83 2.85L146.62 164H13.38Z" />
      </G>
    </Svg>
  );
};