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

export const PiSubtitlesSlashLight = (props: IconProps) => {
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
        <Path d="M52.44 36a6 6 0 0 0-8.88 8L49 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h158.8l12.76 14a6 6 0 0 0 8.88-8.08ZM32 194a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h27.89l61.82 68H104a6 6 0 0 0 0 12h28.62l18.18 20H56a6 6 0 0 0 0 12h105.71l18.18 20Zm18-58a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H56a6 6 0 0 1-6-6m188-72v130.83a6 6 0 1 1-12 0V64a2 2 0 0 0-2-2H105.79a6 6 0 0 1 0-12H224a14 14 0 0 1 14 14m-59.48 78a6 6 0 1 1 0-12H200a6 6 0 0 1 0 12Z" />
      </G>
    </Svg>
  );
};