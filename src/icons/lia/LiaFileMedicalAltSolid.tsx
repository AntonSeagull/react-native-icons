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

export const LiaFileMedicalAltSolid = (props: IconProps) => {
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
        <Path d="M6 3v11h1.367L8 12.42V5h10v6h6v16H8v-5.754l-.053-.053L6.756 20H6v9h20V9.594l-.281-.313-6-6L19.406 3zm14 3.438L22.563 9H20zm-9.031 3.949-2.336 5.832L8.414 16H2v2h5.586l1.777 1.781 1.668-4.168 3 7 2.07-5.175.282.562h1.887a2 2 0 1 0 0-2h-.653l-1.719-3.437-1.93 4.824z" />
      </G>
    </Svg>
  );
};