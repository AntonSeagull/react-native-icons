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

export const LiaLinkedin = (props: IconProps) => {
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
        <Path d="M7.5 5A2.52 2.52 0 0 0 5 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5Zm0 2h17c.285 0 .5.215.5.5v17c0 .285-.215.5-.5.5h-17a.49.49 0 0 1-.5-.5v-17c0-.285.215-.5.5-.5m2.938 1.719a1.719 1.719 0 1 0 0 3.437 1.719 1.719 0 0 0 0-3.437m9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.812V23h2.937v-4.687c0-1.239.246-2.438 1.781-2.438 1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5M9 13.5V23h2.969v-9.5Z" />
      </G>
    </Svg>
  );
};