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

export const TbCakeRoll = (props: IconProps) => {
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
        <Path d="M12 15c-4.97 0-9-2.462-9-5.5S7.03 4 12 4s9 2.462 9 5.5-4.03 5.5-9 5.5" />
        <Path d="M12 6.97c3 0 4 1.036 4 1.979 0 2.805-8 2.969-8-.99C8 5.849 9.5 4 12 4" />
        <Path d="M21 9.333v5.334C21 17.612 16.97 20 12 20s-9-2.388-9-5.333V9.333" />
      </G>
    </Svg>
  );
};