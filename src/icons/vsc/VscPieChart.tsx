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

export const VscPieChart = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M10 6h3.9A5.01 5.01 0 0 0 10 2.1zm0-4.917A6.005 6.005 0 0 1 15 7H9V1q.511 0 1 .083M7 8l1 1h4.9A5.002 5.002 0 0 1 3 8a5 5 0 0 1 4-4.9zm1 6a6 6 0 0 0 6-6H8V2q-.511 0-1 .083A6.002 6.002 0 0 0 8 14" clipRule="evenodd" />
      </G>
    </Svg>
  );
};