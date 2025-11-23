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

export const PiBuildingsLight = (props: IconProps) => {
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
        <Path d="M240 210h-18V96a14 14 0 0 0-14-14h-66V32a14 14 0 0 0-21.77-11.64l-80 53.33A14 14 0 0 0 34 85.34V210H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M208 94a2 2 0 0 1 2 2v114h-68V94ZM46 85.34a2 2 0 0 1 .89-1.66l80-53.34A2 2 0 0 1 130 32v178H46ZM110 112v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m-32 0v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m0 56v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m32 0v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0" />
      </G>
    </Svg>
  );
};