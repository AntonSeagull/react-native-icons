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

export const PiGitMergeThin = (props: IconProps) => {
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
        <Path d="M208 116a28 28 0 0 0-27.62 23.44l-45.85-6.55a12 12 0 0 1-7.41-4.07L87.75 82.9a28 28 0 1 0-11.75.81v88.58a28 28 0 1 0 8 0V90.81L121 134a20 20 0 0 0 12.36 6.78l46.83 6.69A28 28 0 1 0 208 116M60 56a20 20 0 1 1 20 20 20 20 0 0 1-20-20m40 144a20 20 0 1 1-20-20 20 20 0 0 1 20 20m108-36a20 20 0 1 1 20-20 20 20 0 0 1-20 20" />
      </G>
    </Svg>
  );
};