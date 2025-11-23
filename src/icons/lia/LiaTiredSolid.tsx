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

export const LiaTiredSolid = (props: IconProps) => {
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
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5m-5.945 6.168-1.11 1.664L10.697 14l-1.752 1.168 1.11 1.664L14.303 14zm11.89 0L17.697 14l4.248 2.832 1.11-1.664L21.303 14l1.752-1.168zM16 19c-2.604 0-4.334 2.159-4.947 3.344a.447.447 0 0 0 .535.633C12.605 22.643 14.349 22 16 22s3.395.644 4.412.977a.447.447 0 0 0 .535-.633C20.334 21.16 18.604 19 16 19" />
      </G>
    </Svg>
  );
};