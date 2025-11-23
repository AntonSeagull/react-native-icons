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

export const PiThumbsDownBold = (props: IconProps) => {
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
        <Path d="m243.78 156.53-12-96A28 28 0 0 0 204 36H32a20 20 0 0 0-20 20v88a20 20 0 0 0 20 20h40.58l36.69 73.37A12 12 0 0 0 120 244a44.05 44.05 0 0 0 44-44v-12h52a28 28 0 0 0 27.78-31.47M68 140H36V60h32Zm151 22.65a4 4 0 0 1-3 1.35h-64a12 12 0 0 0-12 12v24a20 20 0 0 1-13.18 18.8L92 149.17V60h112a4 4 0 0 1 4 3.5l12 96a4 4 0 0 1-1 3.15" />
      </G>
    </Svg>
  );
};