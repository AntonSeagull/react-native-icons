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

export const PiVan = (props: IconProps) => {
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
        <Path d="m254.07 106.79-45.54-53.06A16 16 0 0 0 196.26 48H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a8 8 0 0 0-1.93-5.21M230.59 104H176V64h20.26ZM104 104V64h56v40ZM88 64v40H32V64Zm-8 136a16 16 0 1 1 16-16 16 16 0 0 1-16 16m112 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16m31-24a32 32 0 0 0-62 0h-50a32 32 0 0 0-62 0H32v-56h208v56Z" />
      </G>
    </Svg>
  );
};