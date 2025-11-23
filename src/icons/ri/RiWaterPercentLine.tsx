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

export const RiWaterPercentLine = (props: IconProps) => {
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
        <Path d="M7.05 8.047 12 3.097l4.95 4.95a7 7 0 1 1-9.9 0m11.314-1.414L12 .269 5.636 6.633a9 9 0 1 0 12.728 0m-2.121 3.538-1.414-1.414-7.072 7.071 1.415 1.415zM8.11 11.232a1.5 1.5 0 1 0 2.121-2.121 1.5 1.5 0 0 0-2.121 2.121m7.778 5.657a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.12" />
      </G>
    </Svg>
  );
};