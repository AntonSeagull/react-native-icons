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

export const SiBoulanger = (props: IconProps) => {
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
        <Path d="M8.405 3.612V7.19h5.662c2.987.034 5.383 2.43 5.383 5.418-.035 2.987-2.431 5.383-5.383 5.418H10.94a5.425 5.425 0 0 1-5.418-5.418V8.405c0-2.084 1.145-3.89 2.882-4.793C3.785 3.612 0 7.398 0 12.017a8.353 8.353 0 0 0 8.37 8.371h7.26c4.619 0 8.37-3.717 8.37-8.371s-3.681-8.405-8.37-8.405zm.035 6.426v2.535a2.55 2.55 0 0 0 2.535 2.535h3.022a2.55 2.55 0 0 0 2.535-2.535 2.527 2.527 0 0 0-2.535-2.535z" />
      </G>
    </Svg>
  );
};