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

export const LiaAngular = (props: IconProps) => {
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
        <Path d="M16 3.936 4.361 8.168 6.45 23.84 16 29.145l9.55-5.307 2.089-15.67zm0 2.128 9.443 3.434-1.744 13.08L16 26.855l-7.7-4.277-1.743-13.08zM16 8l-6 14h2l1.29-3h5.42L20 22h2zm0 4.55.02.06.7 1.75L17.85 17h-3.7l1.13-2.64.7-1.75z" />
      </G>
    </Svg>
  );
};