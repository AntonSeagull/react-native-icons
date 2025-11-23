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

export const DiGitPullRequest = (props: IconProps) => {
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
        <Path fill="#444" d="M9.169 5.186a3.416 3.416 0 0 0-3.415 3.415c0 1.26.691 2.35 1.708 2.943v11.192a3.4 3.4 0 0 0-1.708 2.942c0 1.884 1.53 3.415 3.415 3.415s3.415-1.531 3.415-3.415c0-1.261-.69-2.35-1.708-2.942V11.544a3.4 3.4 0 0 0 1.708-2.943 3.416 3.416 0 0 0-3.415-3.415m0 22.199a1.708 1.708 0 1 1 0-3.417 1.708 1.708 0 0 1 0 3.417m0-17.076a1.708 1.708 0 1 1 0-3.415 1.708 1.708 0 0 1 0 3.415m15.369 12.427v-10.72c0-5.136-5.123-5.123-5.123-5.123h-1.708V3.478l-5.123 5.123 5.123 5.123v-3.415h1.708c1.506 0 1.708 1.708 1.708 1.708v10.719a3.4 3.4 0 0 0-1.708 2.942c0 1.884 1.531 3.415 3.415 3.415s3.415-1.531 3.415-3.415c0-1.261-.691-2.35-1.708-2.942zm-1.707 4.649a1.708 1.708 0 1 1 0-3.417 1.708 1.708 0 0 1 0 3.417" />
      </G>
    </Svg>
  );
};