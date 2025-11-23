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

export const TbToolsKitchen2Off = (props: IconProps) => {
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
        <Path d="M14.386 10.409C14.916 8.129 16.152 5.717 19 3v12m-4 0h-1v-.941M19 19v2h-1v-3M8 8v13M5 5v2a3 3 0 0 0 4.546 2.572M11 7V4M3 3l18 18" />
      </G>
    </Svg>
  );
};