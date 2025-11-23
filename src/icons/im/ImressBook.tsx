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

export const ImressBook = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3 0v16h12V0zm6 4.005a1.995 1.995 0 1 1 0 3.99 1.995 1.995 0 0 1 0-3.99M12 12H6v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM1 1h1.5v3H1zM1 5h1.5v3H1zM1 9h1.5v3H1zM1 13h1.5v3H1z" />
      </G>
    </Svg>
  );
};