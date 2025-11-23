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

export const PiNumpadLight = (props: IconProps) => {
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
        <Path d="M78 48a14 14 0 1 1-14-14 14 14 0 0 1 14 14m50-14a14 14 0 1 0 14 14 14 14 0 0 0-14-14m64 28a14 14 0 1 0-14-14 14 14 0 0 0 14 14M64 90a14 14 0 1 0 14 14 14 14 0 0 0-14-14m64 0a14 14 0 1 0 14 14 14 14 0 0 0-14-14m64 0a14 14 0 1 0 14 14 14 14 0 0 0-14-14M64 146a14 14 0 1 0 14 14 14 14 0 0 0-14-14m64 0a14 14 0 1 0 14 14 14 14 0 0 0-14-14m0 56a14 14 0 1 0 14 14 14 14 0 0 0-14-14m64-56a14 14 0 1 0 14 14 14 14 0 0 0-14-14" />
      </G>
    </Svg>
  );
};