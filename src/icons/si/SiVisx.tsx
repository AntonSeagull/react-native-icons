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

export const SiVisx = (props: IconProps) => {
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
        <Path d="M.002 0 12 11.52 23.998 0h-5.871L12 6.09 5.873 0Zm23.996 0-11.52 11.998 11.52 11.998v-5.871l-6.09-6.127 6.09-6.127ZM.002.004v5.871l6.09 6.127-6.09 6.127V24l11.504-11.998ZM.002 24h5.871L12 17.91 18.127 24h5.871L12 12.47Z" />
      </G>
    </Svg>
  );
};