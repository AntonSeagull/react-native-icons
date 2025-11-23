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

export const PiHockeyFill = (props: IconProps) => {
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
        <Path d="m149.9 122.82 68-80a8 8 0 0 1 12.2 10.36l-68 80a8 8 0 1 1-12.2-10.36M240 168v32a16 16 0 0 1-16 16h-52.3a16 16 0 0 1-12.19-5.64L25.9 53.18a8 8 0 0 1 12.2-10.36L130.9 152H224a16 16 0 0 1 16 16m-16 0h-16v32h16Zm-108.7 15.06a4 4 0 0 1 0 5.18l-18.81 22.12A16 16 0 0 1 84.3 216H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h55.05a4 4 0 0 1 3 1.41ZM48 168H32v32h16Z" />
      </G>
    </Svg>
  );
};