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

export const PiHouseLineBold = (props: IconProps) => {
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
        <Path d="M240 204h-12v-60a12 12 0 0 0 12.49-19.78l-98.35-98.37a20 20 0 0 0-28.28 0L15.51 124.2A12 12 0 0 0 28 144v60H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24M52 121.65l76-76 76 76V204h-40v-52a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v52H52ZM140 204h-24v-40h24Z" />
      </G>
    </Svg>
  );
};