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

export const RiPencilRuler2Fill = (props: IconProps) => {
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
        <Path d="m5.636 12.707 1.829 1.829 1.414-1.415-1.829-1.828 1.415-1.414 1.828 1.828 1.414-1.414L9.88 8.464l1.414-1.414 1.828 1.829 1.415-1.415-1.829-1.828 2.829-2.828a1 1 0 0 1 1.414 0l4.243 4.242a1 1 0 0 1 0 1.414L8.465 21.192a1 1 0 0 1-1.415 0L2.808 16.95a1 1 0 0 1 0-1.414zm8.485 5.656 4.243-4.242L21 16.756V21h-4.242zM5.636 9.878 2.808 7.05a1 1 0 0 1 0-1.415l2.828-2.828a1 1 0 0 1 1.414 0L9.88 5.635z" />
      </G>
    </Svg>
  );
};