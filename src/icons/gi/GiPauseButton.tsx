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

export const GiPauseButton = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M120.16 45A20.16 20.16 0 0 0 100 65.16v381.68A20.16 20.16 0 0 0 120.16 467h65.68A20.16 20.16 0 0 0 206 446.84V65.16A20.16 20.16 0 0 0 185.84 45zm206 0A20.16 20.16 0 0 0 306 65.16v381.68A20.16 20.16 0 0 0 326.16 467h65.68A20.16 20.16 0 0 0 412 446.84V65.16A20.16 20.16 0 0 0 391.84 45z" />
      </G>
    </Svg>
  );
};