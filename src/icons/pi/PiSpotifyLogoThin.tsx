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

export const PiSpotifyLogoThin = (props: IconProps) => {
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
        <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92m27.54-52.13a4 4 0 0 1-5.41 1.67 46.73 46.73 0 0 0-44.26 0 4.1 4.1 0 0 1-1.87.46 4 4 0 0 1-1.87-7.54 55.39 55.39 0 0 1 51.74 0 4 4 0 0 1 1.67 5.41m32-56a4 4 0 0 1-5.41 1.65 114.67 114.67 0 0 0-108.24 0 4 4 0 0 1-3.76-7.06 122.65 122.65 0 0 1 115.76 0 4 4 0 0 1 1.64 5.41Zm-16 28a4 4 0 0 1-5.41 1.65 81 81 0 0 0-76.24 0 4 4 0 0 1-3.76-7.06 89 89 0 0 1 83.76 0 4 4 0 0 1 1.64 5.42Z" />
      </G>
    </Svg>
  );
};