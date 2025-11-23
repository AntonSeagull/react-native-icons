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

export const PiDressBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M218.38 208.12c-.06-.12-.11-.25-.17-.37l-44.54-94.87L193 82.56c.06-.09.12-.18.17-.27a20 20 0 0 0 0-20.58c-.14-.24-.3-.48-.46-.71L172 31.44V12a12 12 0 0 0-24 0v19l-4.38 5.47a20 20 0 0 1-31.24 0L108 31V12a12 12 0 0 0-24 0v19.44L63.31 61c-.16.23-.32.47-.46.71a20 20 0 0 0 0 20.58c0 .09.11.18.17.27l19.31 30.32-44.54 94.87c-.06.12-.11.25-.17.37A20 20 0 0 0 56 236h144a20 20 0 0 0 18.39-27.88ZM128 68a43.75 43.75 0 0 0 31.21-13l12 17.1-17.79 27.9h-50.84L84.82 72.12l12-17.1A43.75 43.75 0 0 0 128 68M62.31 212l41.31-88h48.76l41.31 88Z" />
      </G>
    </Svg>
  );
};