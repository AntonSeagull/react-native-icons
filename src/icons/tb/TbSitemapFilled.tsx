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

export const TbSitemapFilled = (props: IconProps) => {
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
        <Path d="M2 16.667A2.667 2.667 0 0 1 4.667 14h2.666A2.667 2.667 0 0 1 10 16.667v2.666A2.667 2.667 0 0 1 7.333 22H4.667A2.667 2.667 0 0 1 2 19.333zM14 16.667A2.667 2.667 0 0 1 16.667 14h2.666A2.667 2.667 0 0 1 22 16.667v2.666A2.667 2.667 0 0 1 19.333 22h-2.666A2.667 2.667 0 0 1 14 19.333zM8 4.667A2.667 2.667 0 0 1 10.667 2h2.666A2.667 2.667 0 0 1 16 4.667v2.666A2.667 2.667 0 0 1 13.333 10h-2.666A2.667 2.667 0 0 1 8 7.333z" />
        <Path d="M12 8a1 1 0 0 0-1 1v2H8c-1.645 0-3 1.355-3 3v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-1c0-.564.436-1 1-1h8c.564 0 1 .436 1 1v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-1c0-1.645-1.355-3-3-3h-3V9a1 1 0 0 0-1-1" />
      </G>
    </Svg>
  );
};