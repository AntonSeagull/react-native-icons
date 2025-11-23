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

export const PiQueueBold = (props: IconProps) => {
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
        <Path d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m104 52H40a12 12 0 0 0 0 24h92a12 12 0 0 0 0-24m0 64H40a12 12 0 0 0 0 24h92a12 12 0 0 0 0-24m120-20a12 12 0 0 1-5.64 10.18l-64 40A12 12 0 0 1 164 200v-80a12 12 0 0 1 18.36-10.18l64 40A12 12 0 0 1 252 160m-34.64 0L188 141.65v36.7Z" />
      </G>
    </Svg>
  );
};