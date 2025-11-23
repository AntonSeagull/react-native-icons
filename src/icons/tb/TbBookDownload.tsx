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

export const TbBookDownload = (props: IconProps) => {
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
        <Path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12v5" />
        <Path d="M13 16H6a2 2 0 0 0-2 2M15 19l3 3 3-3M18 22v-9" />
      </G>
    </Svg>
  );
};