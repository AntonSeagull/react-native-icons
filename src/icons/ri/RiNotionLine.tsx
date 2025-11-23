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

export const RiNotionLine = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16.285 2.955a1.9 1.9 0 0 0-1.211-.31l-11.06.961a.99.99 0 0 0-.903.986v11.575c0 .408.133.806.378 1.133l2.767 3.69c.203.27.53.418.867.392l12.853-.989a.99.99 0 0 0 .913-.986V6.527a.94.94 0 0 0-.418-.781zm-1.057 1.46a.1.1 0 0 1 .071.02l2.746 1.83-10.207.816-1.86-1.86zm3.883 14.262-10.722.825V8.82l10.722-.858zM4.89 6.646l1.722 1.722V18.5l-1.7-2.267a.1.1 0 0 1-.022-.066zm7.09 3.477-1.977.13v7.562l1.996-.13v-4.337l3.512 4.169 1.976-.13V9.825l-1.996.13v4.337z" />
      </G>
    </Svg>
  );
};