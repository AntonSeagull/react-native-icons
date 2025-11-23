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

export const PiBridgeThin = (props: IconProps) => {
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
        <Path d="M232 164h-36V88.09a67.8 67.8 0 0 0 34.5 31 4 4 0 1 0 3-7.42A59.77 59.77 0 0 1 196 56a4 4 0 0 0-8 0 60 60 0 0 1-120 0 4 4 0 0 0-8 0 59.77 59.77 0 0 1-37.5 55.64 4 4 0 0 0 3 7.42 67.8 67.8 0 0 0 34.5-31V164H24a4 4 0 0 0 0 8h36v28a4 4 0 0 0 8 0v-28h120v28a4 4 0 0 0 8 0v-28h36a4 4 0 0 0 0-8m-84-43v43h-40v-43a68 68 0 0 0 40 0M68 88a68.43 68.43 0 0 0 32 30v46H68Zm88 76v-46a68.43 68.43 0 0 0 32-30v76Z" />
      </G>
    </Svg>
  );
};