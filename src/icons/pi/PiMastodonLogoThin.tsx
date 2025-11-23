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

export const PiMastodonLogoThin = (props: IconProps) => {
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
        <Path d="M184 36H72a36 36 0 0 0-36 36v120a36 36 0 0 0 36 36h88a4 4 0 0 0 0-8H72a28 28 0 0 1-28-28v-12h140a36 36 0 0 0 36-36V72a36 36 0 0 0-36-36m28 108a28 28 0 0 1-28 28H44V72a28 28 0 0 1 28-28h112a28 28 0 0 1 28 28Zm-32-40v32a4 4 0 0 1-8 0v-32a20 20 0 0 0-40 0v32a4 4 0 0 1-8 0v-32a20 20 0 0 0-40 0v32a4 4 0 0 1-8 0v-32a28 28 0 0 1 52-14.41A28 28 0 0 1 180 104" />
      </G>
    </Svg>
  );
};