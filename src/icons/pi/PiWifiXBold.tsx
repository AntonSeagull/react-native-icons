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

export const PiWifiXBold = (props: IconProps) => {
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
        <Path d="M144 204a16 16 0 1 1-16-16 16 16 0 0 1 16 16m73-124 15.52-15.51a12 12 0 0 0-17-17L200 63l-15.51-15.49a12 12 0 0 0-17 17L183 80l-15.49 15.51a12 12 0 0 0 17 17L200 97l15.51 15.52a12 12 0 0 0 17-17Zm-41.9 75.3a80 80 0 0 0-94.13 0 12 12 0 1 0 14.13 19.4 56 56 0 0 1 65.87 0 12 12 0 0 0 14.13-19.4M140 56a12 12 0 0 0-12-12A176.27 176.27 0 0 0 16.39 83.91a12 12 0 1 0 15.23 18.55A152.24 152.24 0 0 1 128 68a12 12 0 0 0 12-12m0 48a12 12 0 0 0-12-12 126.66 126.66 0 0 0-79.45 27.64 12 12 0 0 0 14.9 18.81A102.9 102.9 0 0 1 128 116a12 12 0 0 0 12-12" />
      </G>
    </Svg>
  );
};