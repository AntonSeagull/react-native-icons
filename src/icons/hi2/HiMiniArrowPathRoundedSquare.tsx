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

export const HiMiniArrowPathRoundedSquare = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M10 4.5q1.823 0 3.604.162a.68.68 0 0 1 .615.597q.186 1.557.25 3.15l-1.689-1.69a.75.75 0 0 0-1.06 1.061l2.999 3a.75.75 0 0 0 1.06 0l3.001-3a.75.75 0 1 0-1.06-1.06l-1.748 1.747a41 41 0 0 0-.264-3.386 2.18 2.18 0 0 0-1.97-1.913 41.5 41.5 0 0 0-7.477 0 2.18 2.18 0 0 0-1.969 1.913 41 41 0 0 0-.16 1.61.75.75 0 1 0 1.495.12q.062-.78.154-1.552a.68.68 0 0 1 .615-.597A40 40 0 0 1 10 4.5M5.281 9.22a.75.75 0 0 0-1.06 0l-3.001 3a.75.75 0 1 0 1.06 1.06l1.748-1.747q.063 1.712.264 3.386a2.18 2.18 0 0 0 1.97 1.913 41.5 41.5 0 0 0 7.477 0 2.18 2.18 0 0 0 1.969-1.913q.096-.801.16-1.61a.75.75 0 1 0-1.495-.12q-.062.78-.154 1.552a.68.68 0 0 1-.615.597 40 40 0 0 1-7.208 0 .68.68 0 0 1-.615-.597 40 40 0 0 1-.25-3.15l1.689 1.69a.75.75 0 0 0 1.06-1.061z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};