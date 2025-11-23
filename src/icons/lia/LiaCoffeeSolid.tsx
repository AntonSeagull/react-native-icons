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

export const LiaCoffeeSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11 3v4h2V3Zm4 1v3h2V4ZM4.875 8 5 9.094l1.813 17.219c.16 1.519 1.472 2.687 3 2.687h9.375c1.527 0 2.84-1.168 3-2.687L22.656 22H25c1.645 0 3-1.355 3-3v-3c0-1.645-1.355-3-3-3h-1.406L24 9.094 24.125 8Zm2.25 2h14.75l-1.687 16.094c-.055.52-.481.906-1 .906H9.813c-.52 0-.946-.387-1-.906Zm16.25 5H25c.566 0 1 .434 1 1v3c0 .566-.434 1-1 1h-2.156Z" />
      </G>
    </Svg>
  );
};