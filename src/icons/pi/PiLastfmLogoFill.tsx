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

export const PiLastfmLogoFill = (props: IconProps) => {
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
        <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 144h-11.39a40.09 40.09 0 0 1-36.42-23.45l-23-50.48A24 24 0 0 0 91.39 96H80a24 24 0 0 0-24 24v24a24 24 0 0 0 24 24h8a23.92 23.92 0 0 0 18.74-9 8 8 0 1 1 12.48 10A39.83 39.83 0 0 1 88 184h-8a40 40 0 0 1-40-40v-24a40 40 0 0 1 40-40h11.39a40.09 40.09 0 0 1 36.42 23.45l22.95 50.48A24 24 0 0 0 172.61 168H184a16 16 0 0 0 0-32h-8a28 28 0 0 1 0-56h12a20 20 0 0 1 20 20 8 8 0 0 1-16 0 4 4 0 0 0-4-4h-12a12 12 0 0 0 0 24h8a32 32 0 0 1 0 64" />
      </G>
    </Svg>
  );
};