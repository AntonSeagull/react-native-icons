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

export const LiaCrosshairsSolid = (props: IconProps) => {
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
        <Path d="M15 3v2.063C9.734 5.539 5.54 9.734 5.063 15H3v2h2.063c.476 5.266 4.671 9.46 9.937 9.938V29h2v-2.062c5.266-.477 9.46-4.672 9.938-9.938H29v-2h-2.062C26.46 9.734 22.266 5.54 17 5.063V3Zm0 4.031V9h2V7.031A9 9 0 0 1 24.969 15H23v2h1.969A9 9 0 0 1 17 24.969V23h-2v1.969A9 9 0 0 1 7.031 17H9v-2H7.031A9 9 0 0 1 15 7.031" />
      </G>
    </Svg>
  );
};