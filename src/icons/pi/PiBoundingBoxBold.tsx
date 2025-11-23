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

export const PiBoundingBoxBold = (props: IconProps) => {
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
        <Path d="M208 100a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v4h-56v-4a20 20 0 0 0-20-20H48a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h4v56h-4a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-4h56v4a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-4v-56Zm-28-48h24v24h-24ZM52 52h24v24H52Zm24 152H52v-24h24Zm128 0h-24v-24h24Zm-24-48h-4a20 20 0 0 0-20 20v4h-56v-4a20 20 0 0 0-20-20h-4v-56h4a20 20 0 0 0 20-20v-4h56v4a20 20 0 0 0 20 20h4Z" />
      </G>
    </Svg>
  );
};