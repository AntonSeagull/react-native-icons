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

export const PiHockeyDuotone = (props: IconProps) => {
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
        <Path d="M200 160v48h-28.3a8 8 0 0 1-6.1-2.82l-38-44.7-37.2 44.64a8 8 0 0 1-6.15 2.88H56v-48z" opacity={0.2} />
        <Path d="M224 152h-93.1L38.1 42.82a8 8 0 0 0-12.2 10.36l133.61 157.18A16 16 0 0 0 171.7 216H224a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m-79.5 16H192v32h-20.3Zm79.5 32h-16v-32h16Zm-111.82-20.45a8 8 0 0 0-11.27.92L84.3 200H64v-32h21.2a8 8 0 0 0 0-16H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h52.3a16 16 0 0 0 12.19-5.64l16.61-19.53a8 8 0 0 0-.92-11.28M32 168h16v32H32Zm117.9-45.18 68-80a8 8 0 0 1 12.2 10.36l-68 80a8 8 0 1 1-12.2-10.36" />
      </G>
    </Svg>
  );
};