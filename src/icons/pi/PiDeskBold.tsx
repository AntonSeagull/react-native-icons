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

export const PiDeskBold = (props: IconProps) => {
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
        <Path d="M244 60H12a12 12 0 0 0 0 24h4v108a12 12 0 0 0 24 0v-36h176v36a12 12 0 0 0 24 0V84h4a12 12 0 0 0 0-24M40 84h76v48H40Zm176 48h-76V84h76Zm-116-24a12 12 0 0 1-12 12H68a12 12 0 0 1 0-24h20a12 12 0 0 1 12 12m56 0a12 12 0 0 1 12-12h20a12 12 0 0 1 0 24h-20a12 12 0 0 1-12-12" />
      </G>
    </Svg>
  );
};