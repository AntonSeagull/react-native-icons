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

export const SiBazel = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11.747 23.82 6.25 18.32v-5.535l5.498 5.499zm-.103-17.641.176-.177L6 .18.177 6.002l5.822 5.827zM0 6.532v5.535l5.749 5.754v-5.535l-.104-.103zm17.648 5.65-5.65-5.65-5.646 5.65 5.645 5.646zm.103 5.89v-5.286l-5.504 5.499v5.535l5.504-5.499zM24 6.531l-5.645 5.65-.104.104v5.535L24 12.067zm-.177-.53L18.001.18l-5.827 5.822 5.827 5.827z" />
      </G>
    </Svg>
  );
};