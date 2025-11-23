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

export const TbSkateboardOff = (props: IconProps) => {
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
        <Path d="M5 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 15a2 2 0 0 0 2 2m2-2a2 2 0 0 0-2-2M3 9c0 .552.895 1 2 1h5m4 0h5c1.105 0 2-.448 2-1M3 3l18 18" />
      </G>
    </Svg>
  );
};