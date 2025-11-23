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

export const LiaTumblrSquare = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5zm2 2h18v18H7zm8 3c0 1.657-.895 3-2 3v2h1v3.365A3.635 3.635 0 0 0 17.635 22a3.18 3.18 0 0 0 2.369-.9l-.717-2.114-.853.38A1.02 1.02 0 0 1 17 18.433V15h2v-2h-2v-3z" />
      </G>
    </Svg>
  );
};