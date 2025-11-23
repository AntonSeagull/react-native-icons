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

export const TbGlassFullFilled = (props: IconProps) => {
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
        <Path d="m5.004 10.229-.003-.186.001-.113.008-.071 1-7a1 1 0 0 1 .877-.853L7 2h10a1 1 0 0 1 .968.747l.022.112 1.006 7.05L19 10c0 3.226-2.56 5.564-6 5.945V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-4.055c-3.358-.371-5.878-2.609-5.996-5.716M16.133 4H7.866l-.607 4.258a6 6 0 0 1 5.125.787l.216.155a4 4 0 0 0 4.32.31z" />
      </G>
    </Svg>
  );
};