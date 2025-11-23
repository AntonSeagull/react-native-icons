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

export const PiCodaLogoLight = (props: IconProps) => {
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
        <Path d="M176 86a41.8 41.8 0 0 1 22.61 6.41A10 10 0 0 0 214 84V48a14 14 0 0 0-14-14H56a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-36a10 10 0 0 0-15.36-8.43c-7.63 4.89-14.11 6.76-22.4 6.42H176a42 42 0 0 1 0-84Zm-54 42a54.06 54.06 0 0 0 53.88 54 46.36 46.36 0 0 0 26.12-6.43V208a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2v32.48A54.28 54.28 0 0 0 122 128" />
      </G>
    </Svg>
  );
};