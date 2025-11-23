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

export const TfiMoney = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m10.719 9.577-.01-.01c-.013-.011-.022-.024-.036-.034l-.003.004L9 8.255V2.548c1.14.218 2 1.164 2 2.296l.499.06.501-.06c0-1.68-1.309-3.062-3-3.296V0H8v1.548c-1.691.234-3 1.616-3 3.296 0 .942.421 1.838 1.151 2.473l-.005.005.04.031L8 8.747v5.705c-1.14-.218-2-1.164-2-2.296H5c0 1.68 1.309 3.062 3 3.296v1.549h1v-1.549c1.691-.234 3-1.616 3-3.296 0-1.006-.469-1.939-1.281-2.579M6.822 6.581A2.29 2.29 0 0 1 6 4.844c0-1.132.86-2.078 2-2.296v4.938zM9 14.452V9.516l1.104.849c.567.447.896 1.096.896 1.791 0 1.132-.86 2.078-2 2.296" />
      </G>
    </Svg>
  );
};