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

export const TbCrutchesOff = (props: IconProps) => {
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
        <Path d="M8.178 4.174A2 2 0 0 1 10 3h4a2 2 0 1 1 0 4h-3M11 21h2M12 21v-4.092a3 3 0 0 1 .504-1.664l.992-1.488a3 3 0 0 0 .097-.155M14 10V7M12 21v-4.092a3 3 0 0 0-.504-1.664l-.992-1.488A3 3 0 0 1 10 12.092V10M10 11h1M3 3l18 18" />
      </G>
    </Svg>
  );
};