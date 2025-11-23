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

export const LiaChessBoardSolid = (props: IconProps) => {
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
        <Path d="M7 4v3h3V4zm3 3v3h3V7zm3 0h3V4h-3zm3 0v3h3V7zm3 0h3V4h-3zm3 0v3h3V7zm3 0h3V4h-3zm0 3v3h3v-3zm0 3h-3v3h3zm0 3v3h3v-3zm0 3h-3v3h3zm0 3v3h3v-3zm0 3h-3v3h3zm-3 0v-3h-3v3zm-3 0h-3v3h3zm-3 0v-3h-3v3zm-3 0h-3v3h3zm-3 0v-3H7v3zm-3 0H4v3h3zm0-3v-3H4v3zm0-3h3v-3H7zm0-3v-3H4v3zm0-3h3v-3H7zm0-3V7H4v3zm3 3v3h3v-3zm3 0h3v-3h-3zm3 0v3h3v-3zm3 0h3v-3h-3zm0 3v3h3v-3zm0 3h-3v3h3zm-3 0v-3h-3v3zm-3 0h-3v3h3z" />
      </G>
    </Svg>
  );
};