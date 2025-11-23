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

export const LiaFirstdraft = (props: IconProps) => {
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
        <Path d="M7 4v18h6v-6h6v-6h6V4zm14 8v6h-6v6H7v1h9v-6h6v-6h3v-1zm3 3v6h-6v6h-8v1h9v-6h6v-7zm-3 9v4h1v-3h3v-1z" />
      </G>
    </Svg>
  );
};