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

export const LiaVialsSolid = (props: IconProps) => {
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
        <Path d="M5 5v2h1v12.5C6 21.4 7.6 23 9.5 23s3.5-1.6 3.5-3.5V7h1V5H5m13 0v2h1v12.5c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5V7h1V5zM8 7h3v6H8zm13 0h3v6h-3zM8 15h3v4.5c0 .8-.7 1.5-1.5 1.5S8 20.3 8 19.5zm13 0h3v4.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5zM2 25v2h28v-2z" />
      </G>
    </Svg>
  );
};