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

export const LiaDigitalOcean = (props: IconProps) => {
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
        <Path d="M16 3C8.831 3 3 8.832 3 16h5a8 8 0 1 1 8 8v5c7.169 0 13-5.832 13-13S23.169 3 16 3m0 21v-6h-6v6zm-6 0H6v4h4zm-4 0v-3H3v3z" />
      </G>
    </Svg>
  );
};