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

export const PiDesktopTowerThin = (props: IconProps) => {
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
        <Path d="M212 72a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-4 28h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m36-52v160a12 12 0 0 1-12 12h-80a12 12 0 0 1-12-12v-20H92v24h20a4 4 0 0 1 0 8H64a4 4 0 0 1 0-8h20v-24H32a20 20 0 0 1-20-20V96a20 20 0 0 1 20-20h108V48a12 12 0 0 1 12-12h80a12 12 0 0 1 12 12M140 180V84H32a12 12 0 0 0-12 12v72a12 12 0 0 0 12 12Zm96-132a4 4 0 0 0-4-4h-80a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4Zm-44 124a8 8 0 1 0 8 8 8 8 0 0 0-8-8" />
      </G>
    </Svg>
  );
};