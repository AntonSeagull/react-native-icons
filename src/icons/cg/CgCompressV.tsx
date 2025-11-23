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

export const CgCompressV = (props: IconProps) => {
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
        <Path fill="currentColor" d="M13.034 7.356 15.5 4.854l1.424 1.404-4.913 4.985L7.025 6.33 8.43 4.905l2.604 2.566.05-6.627 2 .015zM15.563 18.532l1.412-1.416-4.957-4.943-4.943 4.957 1.417 1.412 2.584-2.592.026 7.207 2-.008-.026-7.096z" />
      </G>
    </Svg>
  );
};