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

export const TbDeviceMobileFilled = (props: IconProps) => {
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
        <Path d="M16 2a3 3 0 0 1 2.995 2.824L19 5v14a3 3 0 0 1-2.824 2.995L16 22H8a3 3 0 0 1-2.995-2.824L5 19V5a3 3 0 0 1 2.824-2.995L8 2zm-4 14a1 1 0 0 0-.993.883L11 17l.007.127a1 1 0 0 0 1.986 0L13 17.01l-.007-.127A1 1 0 0 0 12 16m1-12h-2l-.117.007a1 1 0 0 0 0 1.986L11 6h2l.117-.007a1 1 0 0 0 0-1.986z" />
      </G>
    </Svg>
  );
};