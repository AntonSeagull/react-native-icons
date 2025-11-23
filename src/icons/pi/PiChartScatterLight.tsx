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

export const PiChartScatterLight = (props: IconProps) => {
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
        <Path d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v154h186a6 6 0 0 1 6 6m-98-50a10 10 0 1 0-10-10 10 10 0 0 0 10 10m-24-56a10 10 0 1 0-10-10 10 10 0 0 0 10 10m-32 72a10 10 0 1 0-10-10 10 10 0 0 0 10 10m96-48a10 10 0 1 0-10-10 10 10 0 0 0 10 10m24-40a10 10 0 1 0-10-10 10 10 0 0 0 10 10m-8 68a10 10 0 1 0 10 10 10 10 0 0 0-10-10" />
      </G>
    </Svg>
  );
};