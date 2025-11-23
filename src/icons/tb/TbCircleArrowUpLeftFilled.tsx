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

export const TbCircleArrowUpLeftFilled = (props: IconProps) => {
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
        <Path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M15 8H9l-.117.007-.149.029-.105.035-.113.054-.111.071a1 1 0 0 0-.112.097l-.08.09-.067.096-.052.098-.044.11-.03.112-.017.126L8 15l.007.117A1 1 0 0 0 9 16l.117-.007A1 1 0 0 0 10 15v-3.585l4.293 4.292.094.083a1 1 0 0 0 1.32-1.497L11.415 10H15l.117-.007A1 1 0 0 0 15 8" />
      </G>
    </Svg>
  );
};