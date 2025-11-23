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

export const PiTrademarkRegisteredLight = (props: IconProps) => {
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
        <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m20.16-78.58A30 30 0 0 0 136 82h-32a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0v-26h25.46L155 171.33a6 6 0 1 0 10-6.66ZM110 94h26a18 18 0 0 1 0 36h-26Z" />
      </G>
    </Svg>
  );
};