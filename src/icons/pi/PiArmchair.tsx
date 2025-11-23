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

export const PiArmchair = (props: IconProps) => {
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
        <Path d="M216 88.8V72a40 40 0 0 0-40-40H80a40 40 0 0 0-40 40v16.8a40 40 0 0 0 0 78.4V200a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-32.8a40 40 0 0 0 0-78.4M80 48h96a24 24 0 0 1 24 24v16.8a40.07 40.07 0 0 0-32 39.2H88a40.07 40.07 0 0 0-32-39.2V72a24 24 0 0 1 24-24m128.39 104H208a8 8 0 0 0-8 8v40H56v-40a8 8 0 0 0-8-8h-.39A24 24 0 1 1 72 128v40a8 8 0 0 0 16 0v-24h80v24a8 8 0 0 0 16 0v-40a24 24 0 1 1 24.39 24" />
      </G>
    </Svg>
  );
};