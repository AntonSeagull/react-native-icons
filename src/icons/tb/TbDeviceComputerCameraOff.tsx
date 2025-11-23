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

export const TbDeviceComputerCameraOff = (props: IconProps) => {
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
        <Path d="M6.15 6.153a7 7 0 0 0 9.696 9.696m2-2a7 7 0 0 0-9.699-9.695" />
        <Path d="M9.13 9.122a3 3 0 0 0 3.743 3.749m2-2a3 3 0 0 0-3.737-3.736M8 16l-2.091 3.486A1 1 0 0 0 6.766 21h10.468a1 1 0 0 0 .857-1.514L16 16M3 3l18 18" />
      </G>
    </Svg>
  );
};