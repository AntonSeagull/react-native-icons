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

export const PiAirTrafficControlFill = (props: IconProps) => {
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
        <Path d="M229.11 70.82A16 16 0 0 0 216 64h-80V32h16a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16h16v32H40a16 16 0 0 0-15 21.47l26.19 72a16 16 0 0 0 15 10.53h123.63a16 16 0 0 0 15-10.53l26.19-72a16 16 0 0 0-1.9-14.65m-126.59 81.05a8 8 0 0 1-1.44.13 8 8 0 0 1-7.86-6.57L83 89.43a8 8 0 0 1 15.75-2.86l10.18 56a8 8 0 0 1-6.41 9.3M173 89.43l-10.19 56a8 8 0 0 1-7.86 6.57 8 8 0 0 1-1.44-.13 8 8 0 0 1-6.44-9.3l10.18-56A8 8 0 0 1 173 89.43M160 188v44a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-44a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};