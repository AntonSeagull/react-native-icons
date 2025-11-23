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

export const PiMastodonLogoBold = (props: IconProps) => {
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
        <Path d="M184 28H72a44.05 44.05 0 0 0-44 44v120a44.05 44.05 0 0 0 44 44h88a12 12 0 0 0 0-24H72a20 20 0 0 1-20-20v-4h132a44.05 44.05 0 0 0 44-44V72a44.05 44.05 0 0 0-44-44m20 116a20 20 0 0 1-20 20H52V72a20 20 0 0 1 20-20h112a20 20 0 0 1 20 20Zm-16-40v32a12 12 0 0 1-24 0v-32a12 12 0 0 0-24 0v32a12 12 0 0 1-24 0v-32a12 12 0 0 0-24 0v32a12 12 0 0 1-24 0v-32a36 36 0 0 1 60-26.8 36 36 0 0 1 60 26.8" />
      </G>
    </Svg>
  );
};