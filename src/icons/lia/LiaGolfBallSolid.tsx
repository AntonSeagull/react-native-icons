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

export const LiaGolfBallSolid = (props: IconProps) => {
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
        <Path d="M16 3C10.488 3 6 7.488 6 13c0 3.684 2.023 6.89 5 8.625V22l-.031 1H11c.047 0 .988.027 1.969.625.867.527 1.777 1.41 2 3.375H7v2h18v-2h-7.969c.223-1.965 1.133-2.848 2-3.375.98-.598 1.922-.625 1.969-.625h.031L21 22v-.375c2.977-1.734 5-4.941 5-8.625 0-5.512-4.488-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8m3 6c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m-2 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m3 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m-5 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m3 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m-2.719 7h1.438A6 6 0 0 0 16 24a6 6 0 0 0-.719-1" />
      </G>
    </Svg>
  );
};