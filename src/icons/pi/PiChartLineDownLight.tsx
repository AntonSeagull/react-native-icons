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

export const PiChartLineDownLight = (props: IconProps) => {
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
        <Path d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v13.52l58 58 27.76-27.75a6 6 0 0 1 8.48 0L194 153.52V128a6 6 0 0 1 12 0v40a5.6 5.6 0 0 1-.11 1.1v.06a7.5 7.5 0 0 1-.31 1.05v.07a6 6 0 0 1-.52 1v.06a6.3 6.3 0 0 1-1.68 1.68h-.06a6 6 0 0 1-1 .52h-.07a7.5 7.5 0 0 1-1.05.31h-.06a5.6 5.6 0 0 1-1.1.11H160a6 6 0 0 1 0-12h25.52L128 104.49l-27.76 27.75a6 6 0 0 1-8.48 0L38 78.48V202h186a6 6 0 0 1 6 6" />
      </G>
    </Svg>
  );
};