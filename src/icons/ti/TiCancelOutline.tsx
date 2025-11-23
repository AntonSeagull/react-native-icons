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

export const TiCancelOutline = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12 20.5c-4.688 0-8.5-3.812-8.5-8.5s3.812-8.5 8.497-8.5c4.69 0 8.503 3.812 8.503 8.5s-3.812 8.5-8.5 8.5m0-15c-3.586 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5m.003 3A3.5 3.5 0 0 1 15.5 12q0 .31-.057.615l-4.057-4.059q.305-.055.614-.056m.003-1a4.5 4.5 0 0 0-2.39.697l6.188 6.188a4.45 4.45 0 0 0 .699-2.387A4.5 4.5 0 0 0 12.003 7.5m-3.446 3.884 4.059 4.06A3.504 3.504 0 0 1 8.5 11.998q0-.31.057-.614m-.358-1.773a4.5 4.5 0 0 0-.699 2.387A4.5 4.5 0 0 0 12 16.5a4.5 4.5 0 0 0 2.387-.699z" />
      </G>
    </Svg>
  );
};