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

export const PiChurchThin = (props: IconProps) => {
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
        <Path d="M226.06 148.57 188 125.74V104a4 4 0 0 0-2-3.47l-54-30.85V44h20a4 4 0 0 0 0-8h-20V16a4 4 0 0 0-8 0v20h-20a4 4 0 0 0 0 8h20v25.68l-54 30.85a4 4 0 0 0-2 3.47v21.74l-38.06 22.83A4 4 0 0 0 28 152v64a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4v-48a12 12 0 0 1 24 0v48a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4v-64a4 4 0 0 0-1.94-3.43M36 154.26l32-19.2V212H36Zm92-6.26a20 20 0 0 0-20 20v44H76V106.32l52-29.71 52 29.71V212h-32v-44a20 20 0 0 0-20-20m92 64h-32v-76.94l32 19.2Z" />
      </G>
    </Svg>
  );
};