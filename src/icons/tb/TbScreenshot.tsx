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

export const TbScreenshot = (props: IconProps) => {
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
        <Path d="M7 19a2 2 0 0 1-2-2M5 13v-2M5 7a2 2 0 0 1 2-2M11 5h2M17 5a2 2 0 0 1 2 2M19 11v2M19 17v4M21 19h-4M13 19h-2" />
      </G>
    </Svg>
  );
};