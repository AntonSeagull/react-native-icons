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

export const TbWorldOff = (props: IconProps) => {
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
        <Path d="M5.657 5.615a9 9 0 1 0 12.717 12.739m1.672-2.322A9 9 0 0 0 7.98 3.948M3.6 9H9m4 0h7.4M3.6 15H15m4 0h1.4" />
        <Path d="M11.5 3a17 17 0 0 0-1.493 3.022M9.16 9.167c-.68 4.027.1 8.244 2.34 11.833M12.5 3a17 17 0 0 1 2.549 8.005m-.207 3.818A17 17 0 0 1 12.5 21M3 3l18 18" />
      </G>
    </Svg>
  );
};