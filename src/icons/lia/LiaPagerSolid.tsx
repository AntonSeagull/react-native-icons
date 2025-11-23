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

export const LiaPagerSolid = (props: IconProps) => {
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
        <Path d="M7 7c-1.645 0-3 1.355-3 3v12c0 1.645 1.355 3 3 3h18c1.645 0 3-1.355 3-3V10c0-1.645-1.355-3-3-3zm0 2h18c.565 0 1 .435 1 1v12c0 .565-.435 1-1 1H7c-.565 0-1-.435-1-1V10c0-.565.435-1 1-1m1 2v6h12v-6zm14 0v2h2v-2zm0 4v2h2v-2zM8 19v2h12v-2zm14 0v2h2v-2z" />
      </G>
    </Svg>
  );
};