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

export const PiPlaylistLight = (props: IconProps) => {
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
        <Path d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 70h120a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m72 52H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m133.75-60.28a6 6 0 0 1-7.48 4L206 120.06V192a30 30 0 1 1-12-24v-56a6 6 0 0 1 7.72-5.75l40 12a6 6 0 0 1 4.03 7.47M194 192a18 18 0 1 0-18 18 18 18 0 0 0 18-18" />
      </G>
    </Svg>
  );
};