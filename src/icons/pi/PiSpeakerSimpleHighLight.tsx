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

export const PiSpeakerSimpleHighLight = (props: IconProps) => {
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
        <Path d="M162.64 26.61a6 6 0 0 0-6.32.65L85.94 82H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 166 224V32a6 6 0 0 0-3.36-5.39M154 211.73l-62.32-48.47A6 6 0 0 0 88 162H40a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h48a6 6 0 0 0 3.68-1.26L154 44.27ZM206 104v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0m32-16v80a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0" />
      </G>
    </Svg>
  );
};