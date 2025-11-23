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

export const CgUiKit = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M14 6h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-4-2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" clipRule="evenodd" />
        <Path fill="currentColor" d="m6 7.46-2.507-.418A3 3 0 0 0 0 10v4.917a3 3 0 0 0 3.493 2.96L6 17.458v-2.027l-2.836.472A1 1 0 0 1 2 14.918v-4.917a1 1 0 0 1 1.164-.987L6 9.487zM18 7.46l2.507-.418A3 3 0 0 1 24 10v4.917a3 3 0 0 1-3.493 2.96L18 17.458v-2.027l2.836.472A1 1 0 0 0 22 14.918v-4.917a1 1 0 0 0-1.164-.987L18 9.487z" />
      </G>
    </Svg>
  );
};