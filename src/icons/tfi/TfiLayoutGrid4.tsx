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

export const TfiLayoutGrid4 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M1 4h3V1H1zm1-2h1v1H2zm3 2h3V1H5zm1-2h1v1H6zm3 2h3V1H9zm1-2h1v1h-1zm3-1v3h3V1zm2 2h-1V2h1zM1 8h3V5H1zm1-2h1v1H2zm3 2h3V5H5zm1-2h1v1H6zm3 2h3V5H9zm1-2h1v1h-1zm3 2h3V5h-3zm1-2h1v1h-1zM1 12h3V9H1zm1-2h1v1H2zm3 2h3V9H5zm1-2h1v1H6zm3 2h3V9H9zm1-2h1v1h-1zm3 2h3V9h-3zm1-2h1v1h-1zM1 16h3v-3H1zm1-2h1v1H2zm3 2h3v-3H5zm1-2h1v1H6zm3 2h3v-3H9zm1-2h1v1h-1zm3 2h3v-3h-3zm1-2h1v1h-1z" />
      </G>
    </Svg>
  );
};