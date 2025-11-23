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

export const LiaLaptopMedicalSolid = (props: IconProps) => {
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
        <Path d="M5 6v13.563l-2.281 2.314A2.44 2.44 0 0 0 2 23.594 2.42 2.42 0 0 0 4.406 26h23.188A2.42 2.42 0 0 0 30 23.594a2.45 2.45 0 0 0-.719-1.719L27 19.563V6zm2 2h18v11H7zm8 2v3h-3v2h3v3h2v-3h3v-2h-3v-3zM6.438 21h19.125l2.312 2.281a.46.46 0 0 1 .125.313.386.386 0 0 1-.406.406H4.406A.386.386 0 0 1 4 23.594c0-.11.047-.234.125-.313z" />
      </G>
    </Svg>
  );
};