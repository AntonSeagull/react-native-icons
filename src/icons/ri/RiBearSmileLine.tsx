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

export const RiBearSmileLine = (props: IconProps) => {
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
        <Path d="M12 17a4 4 0 0 0 4-4h-2a2 2 0 1 1-4 0H8a4 4 0 0 0 4 4M6.5 2a4.5 4.5 0 0 0-2.95 7.898 9 9 0 1 0 16.901 0 4.5 4.5 0 1 0-6.79-5.745 9 9 0 0 0-3.321 0A4.5 4.5 0 0 0 6.5 2M4 6.5a2.5 2.5 0 0 1 4.852-.851l.318.878.898-.257A7 7 0 0 1 12 6c.672 0 1.32.094 1.932.27l.898.257.318-.878a2.501 2.501 0 1 1 3.58 3.03l-.814.46.404.842a7 7 0 1 1-12.635 0l.403-.843-.814-.46A2.5 2.5 0 0 1 4 6.5" />
      </G>
    </Svg>
  );
};