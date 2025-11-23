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

export const LiaFortAwesomeAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15.5 3C8.607 3 3 8.607 3 15.5S8.607 28 15.5 28 28 22.393 28 15.5 22.393 3 15.5 3m0 2C21.29 5 26 9.71 26 15.5S21.29 26 15.5 26 5 21.29 5 15.5 9.71 5 15.5 5M15 8v5h-1v-1h-1v1h-1v-1h-1v6H9v-1H8v2.49a8.52 8.52 0 0 0 6 4.37V20.5c0-.825.675-1.5 1.5-1.5s1.5.675 1.5 1.5v3.36a8.52 8.52 0 0 0 6-4.37V17h-1v1h-2v-6h-1v1h-1v-1h-1v1h-1v-3s.39-.23.9-.23c.5 0 .78.23 1.19.23.55 0 .91-.23.91-.23V8s-.36.23-.91.23c-.41 0-.69-.23-1.19-.23-.51 0-.9.23-.9.23V8zm-2 7h1v2h-1zm4 0h1v2h-1z" />
      </G>
    </Svg>
  );
};