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

export const Imnner7 = (props: IconProps) => {
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
        <Path d="M6.5 14.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 14.5M0 8a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 0 8m13 0a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 13 8M1.904 3.404a1.5 1.5 0 1 1 3.001.001 1.5 1.5 0 0 1-3.001-.001m9.192 9.192a1.5 1.5 0 1 1 3.001.001 1.5 1.5 0 0 1-3.001-.001m-9.192 0a1.5 1.5 0 1 1 3.001.001 1.5 1.5 0 0 1-3.001-.001m9.192-9.192a1.5 1.5 0 1 1 3.001.001 1.5 1.5 0 0 1-3.001-.001" />
      </G>
    </Svg>
  );
};