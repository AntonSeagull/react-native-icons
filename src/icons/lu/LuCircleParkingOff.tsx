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

export const LuCircleParkingOff = (props: IconProps) => {
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
        <Path d="M12.656 7H13a3 3 0 0 1 2.984 3.307M13 13H9M19.071 19.071A1 1 0 0 1 4.93 4.93M2 2l20 20" />
        <Path d="M8.357 2.687a10 10 0 0 1 12.956 12.956M9 17V9" />
      </G>
    </Svg>
  );
};