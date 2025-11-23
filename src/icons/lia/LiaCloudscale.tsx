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

export const LiaCloudscale = (props: IconProps) => {
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
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5m0 4a7 7 0 0 0-6.967 7.666C9.207 14.063 11.353 12 14 12c1.31 0 2.487.515 3.375 1.342l-.863.732A2 2 0 0 0 16 14a2 2 0 1 0 2 2c0-.178-.031-.348-.074-.512l3.928-4.634A.501.501 0 0 0 21.5 10a.5.5 0 0 0-.354.146l-.615.522A6.97 6.97 0 0 0 16 9" />
      </G>
    </Svg>
  );
};