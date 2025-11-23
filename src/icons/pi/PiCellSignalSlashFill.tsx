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

export const PiCellSignalSlashFill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M213.38 221.92a8 8 0 0 1-11.3-.54l-5.51-6.06a16.1 16.1 0 0 1-4.57.68H32a16 16 0 0 1-15.06-10.59 16.4 16.4 0 0 1 4.07-17l79.13-79.12-57.88-63.67a8.22 8.22 0 0 1 .14-11.38 8 8 0 0 1 11.48.37l160 176a8 8 0 0 1-.5 11.31M201 172.66a4 4 0 0 0 7-2.69V40a16 16 0 0 0-27.32-11.32l-55.21 55.2a4 4 0 0 0-.13 5.52Z" />
      </G>
    </Svg>
  );
};