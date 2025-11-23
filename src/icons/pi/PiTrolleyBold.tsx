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

export const PiTrolleyBold = (props: IconProps) => {
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
        <Path d="M92 224a20 20 0 1 1-20-20 20 20 0 0 1 20 20m124-20a20 20 0 1 0 20 20 20 20 0 0 0-20-20m24-36H60V75.31a19.86 19.86 0 0 0-5.86-14.14L32.49 39.51a12 12 0 0 0-17 17L36 77v91h-4a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24" />
      </G>
    </Svg>
  );
};