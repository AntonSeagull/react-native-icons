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

export const PiTrolleyLight = (props: IconProps) => {
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
        <Path d="M86 224a14 14 0 1 1-14-14 14 14 0 0 1 14 14m130-14a14 14 0 1 0 14 14 14 14 0 0 0-14-14m24-32H54V75.31a13.94 13.94 0 0 0-4.1-9.9L28.24 43.76a6 6 0 1 0-8.48 8.48L41.41 73.9a2 2 0 0 1 .59 1.41V178H32a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12" />
      </G>
    </Svg>
  );
};