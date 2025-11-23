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

export const SiWagmi = (props: IconProps) => {
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
        <Path d="M2.74 13.207c0 .756.612 1.37 1.369 1.37h2.739a1.37 1.37 0 0 0 1.37-1.37V7.728a1.37 1.37 0 0 1 2.739 0v5.479c0 .756.613 1.37 1.37 1.37h2.738a1.37 1.37 0 0 0 1.37-1.37V7.728a1.37 1.37 0 1 1 2.739 0v8.218a1.37 1.37 0 0 1-1.37 1.37H1.37A1.37 1.37 0 0 1 0 15.945V7.728a1.37 1.37 0 0 1 2.74 0zm19.434 4.434a1.826 1.826 0 1 0 0-3.652 1.826 1.826 0 0 0 0 3.652" />
      </G>
    </Svg>
  );
};