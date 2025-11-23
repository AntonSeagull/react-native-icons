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

export const DiGitCompare = (props: IconProps) => {
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
        <Path fill="#444" d="M25.453 21.285v-9.89c0-4.739-4.726-4.726-4.726-4.726h-1.575V3.518l-4.726 4.727 4.726 4.726V9.82h1.575c1.389 0 1.575 1.575 1.575 1.575v9.89a3.13 3.13 0 0 0-1.575 2.714c0 1.739 1.412 3.151 3.151 3.151s3.151-1.413 3.151-3.151a3.14 3.14 0 0 0-1.575-2.714zm-1.575 4.29A1.576 1.576 0 0 1 22.302 24a1.576 1.576 0 0 1 3.151 0c0 .871-.705 1.575-1.575 1.575M6.547 11.287v9.889c0 4.739 4.727 4.727 4.727 4.727h1.575v3.151l4.726-4.726-4.726-4.727v3.151h-1.575c-1.389 0-1.575-1.575-1.575-1.575v-9.889a3.14 3.14 0 0 0 1.575-2.715c0-1.739-1.412-3.151-3.151-3.151S4.972 6.834 4.972 8.573c0 1.164.636 2.168 1.575 2.715zm1.576-1.073a1.575 1.575 0 1 1 0-3.15 1.575 1.575 0 0 1 0 3.15" />
      </G>
    </Svg>
  );
};