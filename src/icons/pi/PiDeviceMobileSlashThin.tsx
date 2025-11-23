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

export const PiDeviceMobileSlashThin = (props: IconProps) => {
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
        <Path d="m211 213.31-160-176a4 4 0 0 0-6 5.38l15 16.46V216a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20v-7.25l9 9.94a4 4 0 1 0 5.92-5.38ZM188 216a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V68l120 132ZM72.7 24a4 4 0 0 1 4-4H176a20 20 0 0 1 20 20v110.83a4 4 0 1 1-8 0V40a12 12 0 0 0-12-12H76.7a4 4 0 0 1-4-4" />
      </G>
    </Svg>
  );
};