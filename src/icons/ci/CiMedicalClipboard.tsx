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

export const CiMedicalClipboard = (props: IconProps) => {
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
        <Path d="M17.44 3.5h-1.69v-.53a.95.95 0 0 0-1-.91h-5.5a.95.95 0 0 0-1 .91v.53H6.56A2.5 2.5 0 0 0 4.06 6v13.44a2.5 2.5 0 0 0 2.5 2.5h10.88a2.5 2.5 0 0 0 2.5-2.5V6a2.5 2.5 0 0 0-2.5-2.5m-8.19-.44 5.5.01v1.12c0 .61-.69 1.12-1.5 1.12h-2.5c-.82 0-1.5-.51-1.5-1.12Zm9.69 16.38a1.51 1.51 0 0 1-1.5 1.5H6.56a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5h1.72a2.4 2.4 0 0 0 2.47 1.81h2.5a2.4 2.4 0 0 0 2.47-1.81h1.72a1.5 1.5 0 0 1 1.5 1.5Z" />
        <Path d="M14.5 12.71a.5.5 0 0 1-.5.5h-1.5v1.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-1.5H10a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5h1.5v-1.5a.5.5 0 0 1 .5-.5.51.51 0 0 1 .5.5v1.5H14a.51.51 0 0 1 .5.5" />
      </G>
    </Svg>
  );
};