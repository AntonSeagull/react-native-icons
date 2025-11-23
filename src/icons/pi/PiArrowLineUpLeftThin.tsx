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

export const PiArrowLineUpLeftThin = (props: IconProps) => {
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
        <Path d="M228 208a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M72 148a4 4 0 0 0 4-4V57.66l105.17 105.17a4 4 0 0 0 5.66-5.66L81.66 52H168a4 4 0 0 0 0-8H72a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4" />
      </G>
    </Svg>
  );
};