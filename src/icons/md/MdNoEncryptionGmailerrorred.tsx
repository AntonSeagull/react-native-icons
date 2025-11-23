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

export const MdNoEncryptionGmailerrorred = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2h-4.27L20 17.17V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.21 0-4.07 1.45-4.73 3.44L8.9 6.07zM2.1 2.1.69 3.51 5.3 8.13C4.55 8.42 4 9.15 4 10v10c0 1.1.9 2 2 2h12c.34 0 .65-.09.93-.24l1.56 1.56 1.41-1.41zM12 17c-1.1 0-2-.9-2-2 0-.59.27-1.12.68-1.49l2.81 2.81c-.37.41-.9.68-1.49.68" />
      </G>
    </Svg>
  );
};