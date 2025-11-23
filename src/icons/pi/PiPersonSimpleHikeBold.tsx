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

export const PiPersonSimpleHikeBold = (props: IconProps) => {
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
        <Path d="M152 84a36 36 0 1 0-36-36 36 36 0 0 0 36 36m0-48a12 12 0 1 1-12 12 12 12 0 0 1 12-12m52 108v88a12 12 0 0 1-24 0v-76.76c-24.92-3.37-33.94-17.29-41.38-28.76-1.55-2.39-3.05-4.71-4.67-6.88l-9.54 22L159 166.23a12 12 0 0 1 5 9.77v56a12 12 0 0 1-24 0v-49.83l-25.37-18.12L83 236.78a12 12 0 1 1-22-9.57L118.52 94.9A12 12 0 0 1 135 89a45.5 45.5 0 0 1 8.84 6c6.78 5.89 11.09 12.53 14.89 18.39C166.27 125 170.8 132 192 132a12 12 0 0 1 12 12m-139.4 9.88L39.27 143A12 12 0 0 1 33 127.27l24-56A12 12 0 0 1 72.73 65l25.61 11a12 12 0 1 1-9.45 22L74.3 91.76 59.76 125.7l14.29 6.12a12 12 0 1 1-9.45 22.06" />
      </G>
    </Svg>
  );
};