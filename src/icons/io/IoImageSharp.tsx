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

export const IoImageSharp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M456 64H56a24 24 0 0 0-24 24v336a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V88a24 24 0 0 0-24-24m-124.38 64.2a48 48 0 1 1-43.42 43.42 48 48 0 0 1 43.42-43.42M76 416a12 12 0 0 1-12-12v-87.63L192.64 202l96.95 96.75L172.37 416Zm372-12a12 12 0 0 1-12 12H217.63l149.53-149.53L448 333.84Z" />
      </G>
    </Svg>
  );
};