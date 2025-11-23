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

export const PiSplitVerticalBold = (props: IconProps) => {
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
        <Path d="M220 152a12 12 0 0 1-12 12h-68v39l11.51-11.52a12 12 0 0 1 17 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L116 203v-39H48a12 12 0 0 1 0-24h160a12 12 0 0 1 12 12M48 116h160a12 12 0 0 0 0-24h-68V53l11.51 11.52a12 12 0 1 0 17-17l-32-32a12 12 0 0 0-17 0l-32 32a12 12 0 1 0 17 17L116 53v39H48a12 12 0 0 0 0 24" />
      </G>
    </Svg>
  );
};