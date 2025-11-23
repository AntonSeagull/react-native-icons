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

export const LiaPlaceOfWorshipSolid = (props: IconProps) => {
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
        <Path d="m16 4.406-.781.969-4 5-.219.281v6.281l-5.531 3.47 1.062 1.687.469-.282V27h8v-4c0-.566.434-1 1-1s1 .434 1 1v4h8v-5.187l.469.28 1.062-1.687L21 16.938v-6.282l-.219-.281-4-5Zm0 3.188 3 3.75v4.344l-2.469-1.532-.531-.344-.531.344L13 15.687v-4.343ZM16 11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m0 5.188 7 4.375V25h-4v-2c0-1.645-1.355-3-3-3s-3 1.355-3 3v2H9v-4.437Z" />
      </G>
    </Svg>
  );
};