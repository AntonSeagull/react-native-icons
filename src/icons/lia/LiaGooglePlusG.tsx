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

export const LiaGooglePlusG = (props: IconProps) => {
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
        <Path d="M11 7c-4.973 0-9 4.027-9 9s4.027 9 9 9 9-4.027 9-9c0-.617-.066-1.219-.187-1.8l-.047-.2H11v3h6c-.477 2.836-3.027 5-6 5-3.312 0-6-2.687-6-6 0-3.312 2.688-6 6-6 1.5 0 2.867.555 3.922 1.465l2.148-2.106A8.96 8.96 0 0 0 11 7m14 4v3h-3v2h3v3h2v-3h3v-2h-3v-3Z" />
      </G>
    </Svg>
  );
};