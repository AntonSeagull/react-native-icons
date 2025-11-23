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

export const LiaClinicMedicalSolid = (props: IconProps) => {
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
        <Path d="M16 4.906 3.625 10.063l-.625.28V27h26V10.344l-.625-.281Zm0 2.188 11 4.594V25H5V11.688ZM15 13v3h-3v2h3v3h2v-3h3v-2h-3v-3Z" />
      </G>
    </Svg>
  );
};