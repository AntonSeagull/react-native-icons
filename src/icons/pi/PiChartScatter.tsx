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

export const PiChartScatter = (props: IconProps) => {
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
        <Path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v152h184a8 8 0 0 1 8 8m-100-48a12 12 0 1 0-12-12 12 12 0 0 0 12 12m-24-56a12 12 0 1 0-12-12 12 12 0 0 0 12 12m-32 72a12 12 0 1 0-12-12 12 12 0 0 0 12 12m96-48a12 12 0 1 0-12-12 12 12 0 0 0 12 12m24-40a12 12 0 1 0-12-12 12 12 0 0 0 12 12m-20 76a12 12 0 1 0 12-12 12 12 0 0 0-12 12" />
      </G>
    </Svg>
  );
};