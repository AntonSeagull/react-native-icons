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

export const TbXboxAFilled = (props: IconProps) => {
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
        <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m.936 5.649c-.324-.865-1.548-.865-1.872 0l-3 8a1 1 0 0 0 .585 1.287l.111.035a1 1 0 0 0 1.176-.62L10.443 15h3.114l.507 1.351a1 1 0 1 0 1.872-.702zM12 10.848 12.807 13h-1.614z" />
      </G>
    </Svg>
  );
};