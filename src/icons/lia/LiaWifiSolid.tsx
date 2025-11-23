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

export const LiaWifiSolid = (props: IconProps) => {
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
        <Path d="M16 7c-5.016 0-9.543 2.082-12.812 5.406l1.406 1.406C7.5 10.853 11.535 9 16 9s8.5 1.852 11.406 4.813l1.407-1.407C25.543 9.082 21.016 7 16 7m0 5c-3.64 0-6.918 1.52-9.281 3.938l1.406 1.406C10.125 15.289 12.915 14 16 14s5.875 1.29 7.875 3.344l1.406-1.407C22.918 13.52 19.641 12 16 12m0 5c-2.262 0-4.293.957-5.75 2.469l1.406 1.406A5.99 5.99 0 0 1 16 19c1.71 0 3.25.727 4.344 1.875l1.406-1.406C20.297 17.957 18.262 17 16 17m0 5c-.883 0-1.668.39-2.219 1L16 25.219 18.219 23c-.551-.61-1.336-1-2.219-1" />
      </G>
    </Svg>
  );
};