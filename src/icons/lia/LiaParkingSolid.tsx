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

export const LiaParkingSolid = (props: IconProps) => {
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
        <Path d="M6 5v22h20V5Zm2 2h16v18H8Zm4 3v12h2v-3h3c1.645 0 3-1.355 3-3v-3c0-1.645-1.355-3-3-3Zm2 2h3c.566 0 1 .434 1 1v3c0 .566-.434 1-1 1h-3Z" />
      </G>
    </Svg>
  );
};