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

export const PiCommandFill = (props: IconProps) => {
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
        <Path d="M116 116h24v24h-24ZM86 72a14 14 0 0 0 0 28h14V86a14 14 0 0 0-14-14m98 14a14 14 0 0 0-28 0v14h14a14 14 0 0 0 14-14M72 170a14 14 0 0 0 28 0v-14H86a14 14 0 0 0-14 14M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-68 92v-24h14a30 30 0 1 0-30-30v14h-24V86a30 30 0 1 0-30 30h14v24H86a30 30 0 1 0 30 30v-14h24v14a30 30 0 1 0 30-30Zm0 30a14 14 0 1 0 14-14h-14Z" />
      </G>
    </Svg>
  );
};