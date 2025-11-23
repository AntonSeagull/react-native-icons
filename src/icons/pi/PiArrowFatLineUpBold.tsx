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

export const PiArrowFatLineUpBold = (props: IconProps) => {
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
        <Path d="m232.48 111.51-96-96a12 12 0 0 0-17 0l-96 96A12 12 0 0 0 32 132h36v44a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12v-44h36a12 12 0 0 0 8.48-20.49M176 108a12 12 0 0 0-12 12v44H92v-44a12 12 0 0 0-12-12H61l67-67 67 67Zm12 108a12 12 0 0 1-12 12H80a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};