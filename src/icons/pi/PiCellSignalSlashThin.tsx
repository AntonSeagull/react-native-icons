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

export const PiCellSignalSlashThin = (props: IconProps) => {
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
        <Path d="M84 152v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0m-44 36a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4m171 25.31-160-176a4 4 0 0 0-6 5.38l71 78.06V200a4 4 0 0 0 8 0v-70.45l32 35.2V200a4 4 0 0 0 8 0v-26.45l41 45.14a4 4 0 1 0 5.92-5.38Zm-51-93.68a4 4 0 0 0 4-4V72a4 4 0 0 0-8 0v43.63a4 4 0 0 0 4 4m40 44a4 4 0 0 0 4-4V32a4 4 0 0 0-8 0v127.63a4 4 0 0 0 4 4" />
      </G>
    </Svg>
  );
};