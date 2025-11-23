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

export const PiRewindBold = (props: IconProps) => {
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
        <Path d="M225.7 54.46a20 20 0 0 0-20.33.66L132 101.85v-30a19.91 19.91 0 0 0-30.63-16.72l-88.18 56.16a19.79 19.79 0 0 0 0 33.42l88.18 56.17A19.91 19.91 0 0 0 132 184.16v-30l73.37 46.73A19.91 19.91 0 0 0 236 184.16V71.84a19.84 19.84 0 0 0-10.3-17.38M108 176.64 31.63 128 108 79.36Zm104 0L135.63 128 212 79.36Z" />
      </G>
    </Svg>
  );
};