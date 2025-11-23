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

export const TbDeviceGamepad3 = (props: IconProps) => {
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
        <Path d="M9 12 6 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2zM15 12l3-3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2zM12 15l-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2zM12 9 9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2z" />
      </G>
    </Svg>
  );
};