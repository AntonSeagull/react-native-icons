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

export const PiFileHtmlThin = (props: IconProps) => {
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
        <Path d="M212 88a4 4 0 0 0-1.17-2.83l-2-2-54-54A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v80a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v28a4 4 0 0 0 8 0Zm-56-46.35L198.34 84H156ZM64 160v48a4 4 0 0 1-8 0v-20H28v20a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0v20h28v-20a4 4 0 0 1 8 0m56 0a4 4 0 0 1-4 4h-12v44a4 4 0 0 1-8 0v-44H84a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m72 0v48a4 4 0 0 1-8 0v-36l-16.8 22.4a4 4 0 0 1-6.4 0L144 172v36a4 4 0 0 1-8 0v-48a4 4 0 0 1 7.2-2.4l20.8 27.73 20.8-27.73a4 4 0 0 1 7.2 2.4m56 48a4 4 0 0 1-4 4h-28a4 4 0 0 1-4-4v-48a4 4 0 0 1 8 0v44h24a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};