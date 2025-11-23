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

export const PiFunnelSimpleXThin = (props: IconProps) => {
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
        <Path d="M192 140H64a4 4 0 0 1 0-8h128a4 4 0 0 1 0 8m40-56H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8m-104 96h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m90.83-6.83a4 4 0 0 0-5.66 0L192 194.34l-21.17-21.17a4 4 0 0 0-5.66 5.66L186.34 200l-21.17 21.17a4 4 0 0 0 5.66 5.66L192 205.66l21.17 21.17a4 4 0 0 0 5.66-5.66L197.66 200l21.17-21.17a4 4 0 0 0 0-5.66" />
      </G>
    </Svg>
  );
};