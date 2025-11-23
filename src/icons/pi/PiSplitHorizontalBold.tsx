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

export const PiSplitHorizontalBold = (props: IconProps) => {
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
        <Path d="M116 48v160a12 12 0 0 1-24 0v-68H53l11.52 11.51a12 12 0 0 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17L53 116h39V48a12 12 0 0 1 24 0m124.49 71.51-32-32a12 12 0 0 0-17 17L203 116h-39V48a12 12 0 0 0-24 0v160a12 12 0 0 0 24 0v-68h39l-11.52 11.51a12 12 0 0 0 17 17l32-32a12 12 0 0 0 .01-17" />
      </G>
    </Svg>
  );
};