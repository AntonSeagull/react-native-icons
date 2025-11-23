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

export const IoCodeSlashSharp = (props: IconProps) => {
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
        <Path d="M161.98 397.63 0 256l161.98-141.63 27.65 31.61L64 256l125.63 110.02zM350.02 397.63l-27.65-31.61L448 256 322.37 145.98l27.65-31.61L512 256zM222.15 442 182 430.08 289.85 70 330 81.92z" />
      </G>
    </Svg>
  );
};