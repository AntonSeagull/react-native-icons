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

export const LiaBanSolid = (props: IconProps) => {
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
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11 0 2.727-.988 5.207-2.625 7.125L9.031 7.469A10.95 10.95 0 0 1 16 5M7.625 8.875l15.344 15.656A10.95 10.95 0 0 1 16 27C9.914 27 5 22.086 5 16c0-2.727.988-5.207 2.625-7.125" />
      </G>
    </Svg>
  );
};