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

export const FaPlug = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 384 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 192, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M320 32a32 32 0 0 0-64 0v96h64Zm48 128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h16v32a160.07 160.07 0 0 0 128 156.8V512h64v-99.2A160.07 160.07 0 0 0 352 256v-32h16a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M128 32a32 32 0 0 0-64 0v96h64Z" />
      </G>
    </Svg>
  );
};