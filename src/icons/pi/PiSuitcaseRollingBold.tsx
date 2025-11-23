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

export const PiSuitcaseRollingBold = (props: IconProps) => {
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
        <Path d="M116 96v80a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0m24 0v80a12 12 0 0 0 24 0V96a12 12 0 0 0-24 0m72-32v144a20 20 0 0 1-20 20h-12v12a12 12 0 0 1-24 0v-12h-56v12a12 12 0 0 1-24 0v-12H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h20V28a28 28 0 0 1 28-28h32a28 28 0 0 1 28 28v16h20a20 20 0 0 1 20 20M108 44h40V28a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4Zm80 24H68v136h120Z" />
      </G>
    </Svg>
  );
};