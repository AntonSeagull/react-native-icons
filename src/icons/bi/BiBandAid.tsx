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

export const BiBandAid = (props: IconProps) => {
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
        <Path d="M8.111 21.889a5.96 5.96 0 0 0 4.242-1.757l7.778-7.778a6.007 6.007 0 0 0 0-8.485 5.97 5.97 0 0 0-4.243-1.757 5.96 5.96 0 0 0-4.242 1.757l-7.778 7.778a6.007 6.007 0 0 0 0 8.485 5.97 5.97 0 0 0 4.243 1.757m-2.829-8.828 7.778-7.778a3.98 3.98 0 0 1 2.828-1.171c1.069 0 2.073.416 2.829 1.171a4.006 4.006 0 0 1 0 5.657l-7.778 7.778a3.98 3.98 0 0 1-2.828 1.171 3.98 3.98 0 0 1-2.829-1.171 4.01 4.01 0 0 1 0-5.657" />
        <Circle cx={9} cy={12} r={1} />
        <Circle cx={15} cy={12} r={1} />
        <Circle cx={12} cy={15} r={1} />
        <Circle cx={12} cy={9} r={1} />
      </G>
    </Svg>
  );
};