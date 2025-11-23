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

export const PiCassetteTapeThin = (props: IconProps) => {
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
        <Path d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12M72 196l18-24h76l18 24Zm156-4a4 4 0 0 1-4 4h-30l-22.8-30.4a4 4 0 0 0-3.2-1.6H88a4 4 0 0 0-3.2 1.6L62 196H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4ZM176 84H80a28 28 0 0 0 0 56h96a28 28 0 0 0 0-56M60 112a20 20 0 1 1 20 20 20 20 0 0 1-20-20m39.57 20a27.94 27.94 0 0 0 0-40h56.86a27.94 27.94 0 0 0 0 40Zm76.43 0a20 20 0 1 1 20-20 20 20 0 0 1-20 20" />
      </G>
    </Svg>
  );
};