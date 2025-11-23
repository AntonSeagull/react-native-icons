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

export const LuTouchpadOff = (props: IconProps) => {
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
        <Path d="M12 20v-6M19.656 14H22M2 14h12M2 2l20 20M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2M9.656 4H20a2 2 0 0 1 2 2v10.344" />
      </G>
    </Svg>
  );
};