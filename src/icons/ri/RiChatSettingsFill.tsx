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

export const RiChatSettingsFill = (props: IconProps) => {
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
        <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm1.69-6.929-.975.563 1 1.732.976-.563c.501.51 1.14.887 1.854 1.071V16h2v-1.126a4 4 0 0 0 1.854-1.072l.976.564 1-1.732-.975-.563a4 4 0 0 0 0-2.142l.975-.563-1-1.732-.976.563A4 4 0 0 0 13 7.126V6h-2v1.126a4 4 0 0 0-1.854 1.071l-.976-.563-1 1.732.975.563a4 4 0 0 0 0 2.142M12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
      </G>
    </Svg>
  );
};