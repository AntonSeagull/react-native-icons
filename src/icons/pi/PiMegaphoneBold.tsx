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

export const PiMegaphoneBold = (props: IconProps) => {
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
        <Path d="M252 120a52.06 52.06 0 0 0-52-52h-39.68c-3.44-.21-52.6-4-99.46-43.3A20 20 0 0 0 28 40v160a19.8 19.8 0 0 0 11.54 18.12 19.86 19.86 0 0 0 21.32-2.81A192.9 192.9 0 0 1 144 174.47v26.2a20 20 0 0 0 8.9 16.64 11 11 0 0 0 1.39.8l14.44 7.06A20 20 0 0 0 198.37 213l11.09-41.82A52.07 52.07 0 0 0 252 120M52 191.63V48.4c36.17 28.07 72.17 38.1 92 41.66V150c-19.83 3.52-55.83 13.55-92 41.63m124.39 10.57-8.39-4.1V172h16.4ZM200 148h-32V92h32a28 28 0 1 1 0 56" />
      </G>
    </Svg>
  );
};