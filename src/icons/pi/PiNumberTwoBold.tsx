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

export const PiNumberTwoBold = (props: IconProps) => {
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
        <Path d="M180 208a12 12 0 0 1-12 12H88a12 12 0 0 1-9.6-19.2l71.95-95.92a28 28 0 1 0-48-28.06 12 12 0 0 1-22-9.62 52.3 52.3 0 0 1 6.13-10.49 52 52 0 0 1 83.06 62.59L112 196h56a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};