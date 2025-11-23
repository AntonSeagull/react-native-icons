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

export const PiBarcodeBold = (props: IconProps) => {
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
        <Path d="M232 52v40a12 12 0 0 1-24 0V64h-28a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12M76 192H48v-28a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24m144-40a12 12 0 0 0-12 12v28h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M36 104a12 12 0 0 0 12-12V64h28a12 12 0 0 0 0-24H36a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12m52-24a12 12 0 0 0-12 12v72a12 12 0 0 0 24 0V92a12 12 0 0 0-12-12m92 84V92a12 12 0 0 0-24 0v72a12 12 0 0 0 24 0m-52-84a12 12 0 0 0-12 12v72a12 12 0 0 0 24 0V92a12 12 0 0 0-12-12" />
      </G>
    </Svg>
  );
};