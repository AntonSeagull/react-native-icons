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

export const PiChartScatterFill = (props: IconProps) => {
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
        <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-28 32a12 12 0 1 1-12 12 12 12 0 0 1 12-12m0 56a12 12 0 1 1-12 12 12 12 0 0 1 12-12m-40-16a12 12 0 1 1-12 12 12 12 0 0 1 12-12m-24-40a12 12 0 1 1-12 12 12 12 0 0 1 12-12m-24 56a12 12 0 1 1-12 12 12 12 0 0 1 12-12m100 64H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v104h136a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  );
};