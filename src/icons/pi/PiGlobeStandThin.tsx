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

export const PiGlobeStandThin = (props: IconProps) => {
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
        <Path d="M136 180a76 76 0 1 0-76-76 76.08 76.08 0 0 0 76 76m0-144a68 68 0 1 1-68 68 68.07 68.07 0 0 1 68-68m74.89 140.28a4 4 0 0 1-.12 5.65 107.3 107.3 0 0 1-70.77 30V236h28a4 4 0 0 1 0 8h-64a4 4 0 0 1 0-8h28v-24.08A108 108 0 0 1 58.06 29.23a4 4 0 1 1 5.77 5.54 100 100 0 0 0 141.4 141.39 4 4 0 0 1 5.66.12" />
      </G>
    </Svg>
  );
};