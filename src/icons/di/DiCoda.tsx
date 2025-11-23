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

export const DiCoda = (props: IconProps) => {
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
        <Path fill="#444" d="m23.895 10.232-.419-.362-16.81 15.685L22.365 8.909l-.42-.364c-2.026-1.087-4.61-.843-6.72-.149-.609.201-1.217.442-1.796.718a13.4 13.4 0 0 0-3.416 2.312c-2.303 2.165-3.767 5.051-4.484 8.11a29 29 0 0 0-.488 2.611 49 49 0 0 0-.319 3.311c-.065.93-.204 2.187 1.094 2.109.231-.014.462-.011.693-.016 3.249-.069 6.516-.033 9.64-1.078 2.032-.68 3.98-1.779 5.503-3.292 2.282-2.265 3.934-5.567 3.675-8.845-.114-1.453-.434-2.987-1.433-4.105zm2.479-5.231.942.942L9.707 22.532z" />
      </G>
    </Svg>
  );
};