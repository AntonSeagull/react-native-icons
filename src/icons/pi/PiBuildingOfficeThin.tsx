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

export const PiBuildingOfficeThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M248 212h-20V92h4a4 4 0 0 0 0-8h-52V44h4a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8h4v168H24a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M220 92v120h-40V92ZM52 44h120v168h-32v-52a4 4 0 0 0-4-4H88a4 4 0 0 0-4 4v52H52Zm80 168H92v-48h40ZM76 80a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H80a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-44 44a4 4 0 0 1 0-8h16a4 4 0 0 1 0 8Zm44-4a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4" />
      </G>
    </Svg>
  );
};