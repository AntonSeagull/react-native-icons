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

export const SiDiscourse = (props: IconProps) => {
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
        <Path d="M12.103 0C18.666 0 24 5.485 24 11.997c0 6.51-5.33 11.99-11.9 11.99L0 24V11.79C0 5.28 5.532 0 12.103 0m.116 4.563a7.4 7.4 0 0 0-6.337 3.57 7.25 7.25 0 0 0-.148 7.22L4.4 19.61l4.794-1.074a7.42 7.42 0 0 0 8.136-1.39 7.26 7.26 0 0 0 1.737-7.997 7.375 7.375 0 0 0-6.84-4.585z" />
      </G>
    </Svg>
  );
};