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

export const FcDisplay = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#80DEEA" d="M40 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4" />
        <Path d="M36 17h-5l-2-2 2-2h5l2 2zM36 35h-5l-2-2 2-2h5l2 2zM37 30V18l2-2 2 2v12l-2 2zM26 30V18l2-2 2 2v12l-2 2zM17 17h-5l-2-2 2-2h5l2 2zM17 35h-5l-2-2 2-2h5l2 2zM18 30V18l2-2 2 2v12l-2 2zM7 30V18l2-2 2 2v12l-2 2z" />
      </G>
    </Svg>
  );
};