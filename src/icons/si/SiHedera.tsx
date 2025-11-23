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

export const SiHedera = (props: IconProps) => {
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
        <Path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m4.957 17.396h-1.581V14.01H8.622v3.378H7.05V6.604H8.63v3.384h6.754V6.604h1.58zm-1.581-6.259H8.622v1.724h6.754Z" />
      </G>
    </Svg>
  );
};