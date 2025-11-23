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

export const PiMailboxLight = (props: IconProps) => {
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
        <Path d="M102 152a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m136-36v60a14 14 0 0 1-14 14h-90v34a6 6 0 0 1-12 0v-34H32a14 14 0 0 1-14-14v-60a58.07 58.07 0 0 1 58-58h78V24a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-26v28h14a58.07 58.07 0 0 1 58 58m-116 62v-62a46 46 0 0 0-92 0v60a2 2 0 0 0 2 2Zm104-62a46.06 46.06 0 0 0-46-46h-14v74a6 6 0 0 1-12 0V70h-42.71A57.93 57.93 0 0 1 134 116v62h90a2 2 0 0 0 2-2Z" />
      </G>
    </Svg>
  );
};