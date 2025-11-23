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

export const TiWatch = (props: IconProps) => {
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
        <Path d="M12 13h2c.55 0 1-.45 1-1s-.45-1-1-1h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1m5-5.895V5c0-1.654-1.346-3-3-3h-4C8.346 2 7 3.346 7 5v2.105C5.764 8.368 5 10.094 5 12s.764 3.632 2 4.895V19c0 1.654 1.346 3 3 3h4c1.654 0 3-1.346 3-3v-2.105c1.236-1.262 2-2.988 2-4.895s-.764-3.632-2-4.895M9 5c0-.551.449-1 1-1h4c.551 0 1 .449 1 1v1.809a5.96 5.96 0 0 0-6 0zm6 14c0 .551-.449 1-1 1h-4c-.551 0-1-.449-1-1v-1.811a5.95 5.95 0 0 0 6 0zm-3-2c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5" />
      </G>
    </Svg>
  );
};