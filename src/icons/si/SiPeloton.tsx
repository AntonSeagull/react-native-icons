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

export const SiPeloton = (props: IconProps) => {
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
        <Path d="m17.728 5.764 1.731-3.006a1.84 1.84 0 0 0-.672-2.513 1.84 1.84 0 0 0-2.513.673l-1.74 3.007a8.46 8.46 0 0 0-9.86 3.847 8.46 8.46 0 0 0-.664 7.032l3.205-5.558a5.5 5.5 0 0 1 3.353-2.572 5.43 5.43 0 0 1 4.183.554c2.631 1.523 3.541 4.905 2.018 7.536a5.523 5.523 0 0 1-7.536 2.018l1.84-3.185a1.84 1.84 0 0 0 2.511-.672 1.84 1.84 0 0 0-.672-2.512 1.84 1.84 0 0 0-2.512.672L4.545 21.242a1.84 1.84 0 0 0 .672 2.512 1.84 1.84 0 0 0 2.512-.672l1.741-3.007a8.46 8.46 0 0 0 9.86-3.847c2.018-3.491 1.257-7.833-1.602-10.464" />
      </G>
    </Svg>
  );
};