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

export const PiArrowsInLineVerticalBold = (props: IconProps) => {
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
        <Path d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M119.51 96.49a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17L140 59V16a12 12 0 0 0-24 0v43l-11.51-11.49a12 12 0 0 0-17 17Zm17 63a12 12 0 0 0-17 0l-32 32a12 12 0 0 0 17 17L116 197v43a12 12 0 0 0 24 0v-43l11.51 11.52a12 12 0 0 0 17-17Z" />
      </G>
    </Svg>
  );
};