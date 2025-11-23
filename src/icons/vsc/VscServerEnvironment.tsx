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

export const VscServerEnvironment = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M6 3h4v1H6zm0 6h4v1H6zm0 2h4v1H6zm9.14 5H.86l1.25-5H4V2a.95.95 0 0 1 .078-.383q.079-.18.211-.32a.9.9 0 0 1 .32-.219A1 1 0 0 1 5 1h6a.95.95 0 0 1 .383.078q.18.079.32.211a.9.9 0 0 1 .219.32Q12 1.797 12 2v9h1.89zM5 13h6V2H5zm8.86 2-.75-3H12v2H4v-2H2.89l-.75 3z" />
      </G>
    </Svg>
  );
};