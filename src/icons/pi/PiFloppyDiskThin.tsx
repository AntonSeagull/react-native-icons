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

export const PiFloppyDiskThin = (props: IconProps) => {
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
        <Path d="m216.49 74.83-35.32-35.32a11.93 11.93 0 0 0-8.48-3.51H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V83.31a11.93 11.93 0 0 0-3.51-8.48M172 212H84v-60a4 4 0 0 1 4-4h80a4 4 0 0 1 4 4Zm40-4a4 4 0 0 1-4 4h-28v-60a12 12 0 0 0-12-12H88a12 12 0 0 0-12 12v60H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h124.69a4 4 0 0 1 2.82 1.17l35.32 35.32a4 4 0 0 1 1.17 2.82ZM156 72a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h56a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};