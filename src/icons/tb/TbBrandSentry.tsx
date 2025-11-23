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

export const TbBrandSentry = (props: IconProps) => {
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
        <Path d="M3 18a1.93 1.93 0 0 0 .306 1.076A2 2 0 0 0 4.89 20c.646.033-.537 0 .11 0h3a4.99 4.99 0 0 0-3.66-4.81q.839-1.459 2.04-3.531A9 9 0 0 1 12 20h7a2 2 0 0 0 1.84-2.75L13.74 5a2 2 0 0 0-3.5 0L8.4 8.176C12.882 10.226 16 14.747 16 20" />
      </G>
    </Svg>
  );
};