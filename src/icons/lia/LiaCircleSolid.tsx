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

export const LiaCircleSolid = (props: IconProps) => {
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
        <Path d="M16 4C9.379 4 4 9.379 4 16s5.379 12 12 12 12-5.379 12-12S22.621 4 16 4m0 1c6.082 0 11 4.918 11 11s-4.918 11-11 11S5 22.082 5 16 9.918 5 16 5" />
      </G>
    </Svg>
  );
};