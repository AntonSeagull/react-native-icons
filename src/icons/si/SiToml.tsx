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

export const SiToml = (props: IconProps) => {
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
        <Path d="M.014 0h5.34v2.652H2.888v18.681h2.468V24H.015zm17.622 5.049v2.78h-4.274v12.935h-3.008V7.83H6.059V5.05zM23.986 24h-5.34v-2.652h2.467V2.667h-2.468V0h5.34v24Z" />
      </G>
    </Svg>
  );
};