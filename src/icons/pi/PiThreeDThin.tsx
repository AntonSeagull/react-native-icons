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

export const PiThreeDThin = (props: IconProps) => {
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
        <Path d="M100 148a24 24 0 0 0-24-24 4 4 0 0 1-3.28-6.29L96.32 84H56a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 6.29L83.12 116.8a32 32 0 1 1-30 53.6 4 4 0 1 1 5.72-5.6A24 24 0 0 0 100 148m60-72a52 52 0 0 1 0 104h-24a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4Zm0 8h-20v88h20a44 44 0 0 0 0-88M32 52h192a4 4 0 0 0 0-8H32a4 4 0 0 0 0 8m192 152H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8" />
      </G>
    </Svg>
  );
};