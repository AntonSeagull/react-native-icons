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

export const LiaDashcube = (props: IconProps) => {
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
        <Path d="m24.5 3-.312.281L20.468 7H11c-2.75 0-5 2.25-5 5v10c0 2.75 2.25 5 5 5h10c2.75 0 5-2.25 5-5V3ZM24 6.313V22c0 1.668-1.332 3-3 3H11c-1.668 0-3-1.332-3-3V12c0-1.668 1.332-3 3-3h10.313ZM13 12c-1.094 0-2 .906-2 2v6c0 1.094.906 2 2 2h10.406l-1.687-1.719-.719-.718V14c0-1.094-.906-2-2-2Zm0 2h6v6h-6Z" />
      </G>
    </Svg>
  );
};