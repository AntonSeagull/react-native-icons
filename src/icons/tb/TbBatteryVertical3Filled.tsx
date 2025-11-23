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

export const TbBatteryVertical3Filled = (props: IconProps) => {
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
        <Path d="M13.5 3a1.5 1.5 0 0 1 1.395.948l.018.052H15a3 3 0 0 1 2.995 2.824L18 7v11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h.086l.019-.052a1.5 1.5 0 0 1 1.25-.941L10.5 3zm.5 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m0-3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m0-3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2" />
      </G>
    </Svg>
  );
};