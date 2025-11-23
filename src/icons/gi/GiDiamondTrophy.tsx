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

export const GiDiamondTrophy = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m158.6 41 34.5 69.1L239.2 41zm114.2 0 46.1 69.1L353.4 41zM256 48.22 208.8 119h94.4zm-113.9.14L83.22 119h94.18zm227.8 0L334.6 119h94.2zM80.82 137 196.8 311H249l-63.4-174zm124.08 0L256 277.7 307.1 137zm121.5 0L263 311h52.2l116-174zM201 329v46h110v-46zm-67.8 64-53.69 94H432.5l-53.7-94H183zm26.8 46h192v18H160z" />
      </G>
    </Svg>
  );
};