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

export const PiRewindCircleLight = (props: IconProps) => {
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
        <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m46.68-131.37a6 6 0 0 0-6.28.57L122 122V92a6 6 0 0 0-9.6-4.8l-48 36a6 6 0 0 0 0 9.6l48 36a6 6 0 0 0 9.6-4.8v-30l46.4 34.8a6 6 0 0 0 9.6-4.8V92a6 6 0 0 0-3.32-5.37M110 152l-32-24 32-24Zm56 0-32-24 32-24Z" />
      </G>
    </Svg>
  );
};