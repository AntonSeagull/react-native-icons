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

export const CgCalculator = (props: IconProps) => {
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
        <Path fill="currentColor" d="M17 5H7v2h10zM7 9h2v2H7zM9 13H7v2h2zM7 17h2v2H7zM13 9h-2v2h2zM11 13h2v2h-2zM13 17h-2v2h2zM15 9h2v2h-2zM17 13h-2v6h2z" />
        <Path fill="currentColor" fillRule="evenodd" d="M3 3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0h14v18H5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};