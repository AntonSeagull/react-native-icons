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

export const GrPieChart = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M10 23a9 9 0 0 1 0-18v9l1.162 1.162 5.202 5.202A8.97 8.97 0 0 1 10 23Zm4-13V1a9 9 0 0 1 9 9zm0 3h8a8.96 8.96 0 0 1-2.107 5.787z" />
      </G>
    </Svg>
  );
};