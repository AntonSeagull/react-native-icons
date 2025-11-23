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

export const PiArrowsCounterClockwiseLight = (props: IconProps) => {
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
        <Path d="M88 102H40a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v33.52l18-18a93.45 93.45 0 0 1 66-27.53h.52a93.4 93.4 0 0 1 65.67 26.71 6 6 0 0 1-8.38 8.58A82 82 0 0 0 72.53 72L54.48 90H88a6 6 0 0 1 0 12m128 52h-48a6 6 0 0 0 0 12h33.52l-18.05 18a81.5 81.5 0 0 1-57.53 24h-.46a81.5 81.5 0 0 1-57.29-23.34 6 6 0 0 0-8.38 8.58A93.4 93.4 0 0 0 125.48 220h.52a93.45 93.45 0 0 0 66-27.53l18-18.05V208a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6" />
      </G>
    </Svg>
  );
};