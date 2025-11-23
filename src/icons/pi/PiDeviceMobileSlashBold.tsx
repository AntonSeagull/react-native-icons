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

export const PiDeviceMobileSlashBold = (props: IconProps) => {
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
        <Path d="m216.88 207.93-160-176a12 12 0 1 0-17.76 16.14L52 62.24V216a28 28 0 0 0 28 28h96a28 28 0 0 0 26-17.61 12 12 0 0 0 14.88-18.46M176 220H80a4 4 0 0 1-4-4V88.64L180 203v13a4 4 0 0 1-4 4M75.51 24a12 12 0 0 1 12-12H176a28 28 0 0 1 28 28v98.94a12 12 0 0 1-24 0V40a4 4 0 0 0-4-4H87.51a12 12 0 0 1-12-12" />
      </G>
    </Svg>
  );
};