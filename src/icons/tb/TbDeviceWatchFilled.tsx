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

export const TbDeviceWatchFilled = (props: IconProps) => {
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
        <Path d="M15 2a1 1 0 0 1 1 1v2.126c1.726.445 3 2.01 3 3.874v6a4 4 0 0 1-3 3.874V21a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.126A4 4 0 0 1 5 15V9a4 4 0 0 1 3-3.874V3a1 1 0 0 1 1-1zm-1 17h-4v1h4zm0-15h-4v1h4z" />
      </G>
    </Svg>
  );
};