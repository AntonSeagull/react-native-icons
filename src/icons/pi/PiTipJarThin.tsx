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

export const PiTipJarThin = (props: IconProps) => {
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
        <Path d="M180 52.23V32a12 12 0 0 0-12-12H88a12 12 0 0 0-12 12v20.23A36 36 0 0 0 44 88v112a36 36 0 0 0 36 36h96a36 36 0 0 0 36-36V88a36 36 0 0 0-32-35.77M148 28h20a4 4 0 0 1 4 4v20h-24Zm-32 0h24v24h-24Zm-32 4a4 4 0 0 1 4-4h20v24H84Zm120 168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V88a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28Zm-48-40a20 20 0 0 1-20 20h-4v12a4 4 0 0 1-8 0v-12h-12a4 4 0 0 1 0-8h24a12 12 0 0 0 0-24h-16a20 20 0 0 1 0-40h4V96a4 4 0 0 1 8 0v12h12a4 4 0 0 1 0 8h-24a12 12 0 0 0 0 24h16a20 20 0 0 1 20 20" />
      </G>
    </Svg>
  );
};