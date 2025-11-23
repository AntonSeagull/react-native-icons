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

export const LiaMehRollingEyes = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5m-5 5c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4m10 0c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4m-10.98 2.268A1.5 1.5 0 0 0 11.5 14a1.5 1.5 0 0 0 1.326-.805c.11.247.174.518.174.805 0 1.103-.897 2-2 2s-2-.897-2-2c0-.745.414-1.388 1.02-1.732m11.96 0c.606.344 1.02.987 1.02 1.732 0 1.103-.897 2-2 2s-2-.897-2-2c0-.287.065-.558.174-.805A1.5 1.5 0 0 0 20.5 14a1.5 1.5 0 0 0 1.48-1.732M12 20v2h8v-2z" />
      </G>
    </Svg>
  );
};