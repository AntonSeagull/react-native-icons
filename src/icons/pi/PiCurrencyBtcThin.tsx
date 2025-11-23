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

export const PiCurrencyBtcThin = (props: IconProps) => {
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
        <Path d="M170.27 117.21A40 40 0 0 0 148 44V24a4 4 0 0 0-8 0v20h-24V24a4 4 0 0 0-8 0v20H72a4 4 0 0 0 0 8h12v144H72a4 4 0 0 0 0 8h36v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h12a44 44 0 0 0 10.27-86.79M92 52h56a32 32 0 0 1 0 64H92Zm68 144H92v-72h68a36 36 0 0 1 0 72" />
      </G>
    </Svg>
  );
};