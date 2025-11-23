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

export const LiaLaptopSolid = (props: IconProps) => {
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
        <Path d="M5 6v13.563l-2.281 2.312A2.45 2.45 0 0 0 2 23.594 2.417 2.417 0 0 0 4.406 26h23.188A2.417 2.417 0 0 0 30 23.594c0-.64-.266-1.266-.719-1.719L27 19.563V6Zm2 2h18v11H7Zm-.562 13h19.125l2.312 2.281a.47.47 0 0 1 .125.313.385.385 0 0 1-.406.406H4.406A.385.385 0 0 1 4 23.594c0-.11.047-.235.125-.313Z" />
      </G>
    </Svg>
  );
};