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

export const VscGoToSearch = (props: IconProps) => {
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
        <Path d="M4.8 10.15 1 13.84l.75.66 3.78-3.67zM5.914 6l2.147-2.146v-.708L5.914 1l-.707.707L6.5 3H3a2.5 2.5 0 0 0-.348 4.976 7 7 0 0 1-.14-1.057A1.5 1.5 0 0 1 3 4h3.5L5.207 5.293z" />
        <Path d="m8.237 2.03-.825-.825a5.499 5.499 0 0 1 5.903 8.576A5.5 5.5 0 0 1 3.423 7h.985a4.52 4.52 0 1 0 3.829-4.97" />
      </G>
    </Svg>
  );
};