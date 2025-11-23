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

export const PiDevicesBold = (props: IconProps) => {
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
        <Path d="M224 72h-12v-8a28 28 0 0 0-28-28H40a28 28 0 0 0-28 28v88a28 28 0 0 0 28 28h96v12a28 28 0 0 0 28 28h60a28 28 0 0 0 28-28v-92a28 28 0 0 0-28-28M40 156a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4v8h-24a28 28 0 0 0-28 28v56Zm188 36a4 4 0 0 1-4 4h-60a4 4 0 0 1-4-4v-92a4 4 0 0 1 4-4h60a4 4 0 0 1 4 4Zm-104 16a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12m88-84a12 12 0 0 1-12 12h-12a12 12 0 0 1 0-24h12a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};