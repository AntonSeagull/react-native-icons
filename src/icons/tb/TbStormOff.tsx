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

export const TbStormOff = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9.884 9.874a3 3 0 1 0 4.24 4.246m.57-3.441a3 3 0 0 0-1.41-1.39" />
        <Path d="M7.037 7.063a7 7 0 0 0 9.907 9.892m1.585-2.426A7 7 0 0 0 9.471 5.47" />
        <Path d="M5.369 14.236c-1.605-3.428-1.597-6.673-1-9.849M18.63 9.76a14.3 14.3 0 0 1 1.368 6.251m-.37 3.608q-.132.69-.295 1.377M3 3l18 18" />
      </G>
    </Svg>
  );
};