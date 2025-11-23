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

export const LiaFulcrum = (props: IconProps) => {
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
        <Path d="m15 0-1.28 12.2L10.1 16l3.62 3.8L15 32V19l-3-3 3-3zm2 0v13l3 3-3 3v13l1.28-12.2L21.9 16l-3.62-3.8zM9.5 7 7 10l2.5 3 2.5-3zm13 0L20 10l2.5 3 2.5-3z" />
      </G>
    </Svg>
  );
};