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

export const TbBusStop = (props: IconProps) => {
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
        <Path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM16 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2M16 17H8" />
        <Path d="m16 5 1.5 7H22M9.5 10H17M12 5v5M5 9v11" />
      </G>
    </Svg>
  );
};