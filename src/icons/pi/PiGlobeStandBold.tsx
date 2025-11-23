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

export const PiGlobeStandBold = (props: IconProps) => {
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
        <Path d="M136 176a72 72 0 1 0-72-72 72.08 72.08 0 0 0 72 72m0-120a48 48 0 1 1-48 48 48.05 48.05 0 0 1 48-48m12 159.35V228h20a12 12 0 0 1 0 24h-64a12 12 0 0 1 0-24h20v-12.64A112 112 0 0 1 53.88 27.84a12 12 0 1 1 17.59 16.32 88 88 0 0 0 124.37 124.37 12 12 0 1 1 16.32 17.59A111.5 111.5 0 0 1 148 215.35" />
      </G>
    </Svg>
  );
};