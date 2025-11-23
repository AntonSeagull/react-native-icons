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

export const PiHardHatBold = (props: IconProps) => {
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
        <Path d="M228 148.4V136a100.41 100.41 0 0 0-64-93.3V40a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v2.7A100.41 100.41 0 0 0 28 136v12.4A20 20 0 0 0 12 168v24a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-24a20 20 0 0 0-16-19.6M204 136v12h-40V69.07A76.35 76.35 0 0 1 204 136m-64-92v104h-24V44ZM92 69.07V148H52v-12a76.35 76.35 0 0 1 40-66.93M220 188H36v-16h184Z" />
      </G>
    </Svg>
  );
};