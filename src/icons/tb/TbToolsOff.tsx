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

export const TbToolsOff = (props: IconProps) => {
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
        <Path d="m16 12 4-4a2.828 2.828 0 1 0-4-4l-4 4m-2 2-7 7v4h4l7-7M14.5 5.5l4 4" />
        <Path d="M12 8 7 3M5 5 3 7l5 5M7 8 5.5 9.5M16 12l5 5m-2 2-2 2-5-5M16 17l-1.5 1.5M3 3l18 18" />
      </G>
    </Svg>
  );
};