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

export const PiScanThin = (props: IconProps) => {
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
        <Path d="M220 40v40a4 4 0 0 1-8 0V44h-36a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4M80 212H44v-36a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8m136-40a4 4 0 0 0-4 4v36h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4M40 84a4 4 0 0 0 4-4V44h36a4 4 0 0 0 0-8H40a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4m40-8h96a4 4 0 0 1 4 4v96a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4m4 96h88V84H84Z" />
      </G>
    </Svg>
  );
};