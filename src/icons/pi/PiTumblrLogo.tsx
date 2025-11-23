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

export const PiTumblrLogo = (props: IconProps) => {
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
        <Path d="M192 120a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8h-40V24a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8 40 40 0 0 1-40 40 8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h24v56a64.07 64.07 0 0 0 64 64h40a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8h-32a8 8 0 0 1-8-8v-48Zm-32 72h24v32h-32a48.05 48.05 0 0 1-48-48v-64a8 8 0 0 0-8-8H72V79.43A56.13 56.13 0 0 0 119.43 32H136v40a8 8 0 0 0 8 8h40v24h-40a8 8 0 0 0-8 8v56a24 24 0 0 0 24 24" />
      </G>
    </Svg>
  );
};