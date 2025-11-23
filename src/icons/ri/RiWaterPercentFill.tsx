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

export const RiWaterPercentFill = (props: IconProps) => {
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
        <Path d="M12 .269 5.636 6.633a9 9 0 1 0 12.728 0zm4.243 9.902-7.071 7.072-1.415-1.415 7.072-7.07zM8.11 9.111a1.5 1.5 0 1 1 2.121 2.121 1.5 1.5 0 0 1-2.121-2.121m7.778 7.778a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.12" />
      </G>
    </Svg>
  );
};