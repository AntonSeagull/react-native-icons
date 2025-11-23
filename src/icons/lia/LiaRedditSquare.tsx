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

export const LiaRedditSquare = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5zm2 2h18v18H7zm10.059 1.994a.35.35 0 0 0-.397.268l-.863 3.746c-1.67.042-3.165.594-4.219 1.457A1.5 1.5 0 0 0 10.5 14a1.497 1.497 0 0 0-.445 2.926c-.032.189-.055.379-.055.574 0 2.485 2.686 4.5 6 4.5s6-2.015 6-4.5c0-.195-.023-.385-.055-.574a1.497 1.497 0 1 0-1.525-2.461c-.988-.81-2.363-1.347-3.906-1.445l.756-3.282 2.77.457A.986.986 0 0 0 21 11a1 1 0 0 0 0-2 .99.99 0 0 0-.85.506zm-3.967 6.824A1.09 1.09 0 1 1 13.09 18a1.09 1.09 0 0 1 .002-2.182m5.816 0A1.09 1.09 0 1 1 18.91 18a1.09 1.09 0 0 1-.002-2.182m-5.435 3.203a.35.35 0 0 1 .254.084c1.154.988 3.39.988 4.544 0a.351.351 0 0 1 .458.532c-.701.602-1.696.947-2.729.947s-2.027-.345-2.729-.947a.35.35 0 0 1 .202-.616" />
      </G>
    </Svg>
  );
};