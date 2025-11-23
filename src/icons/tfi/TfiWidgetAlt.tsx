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

export const TfiWidgetAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M2 0h1v1H2zm3 0H4v1h1zm2 0H6v1h1zm2 0H8v1h1zm2 0h-1v1h1zm2 0h-1v1h1zm1 1h1V0h-1zM2 17h1v-1H2zm2 0h1v-1H4zm2 0h1v-1H6zm2 0h1v-1H8zm2 0h1v-1h-1zm2 0h1v-1h-1zm2 0h1v-1h-1zm2-17v1h1V0zm0 3h1V2h-1zm0 2h1V4h-1zm0 2h1V6h-1zm0 2h1V8h-1zm0 2h1v-1h-1zm0 2h1v-1h-1zm0 2h1v-1h-1zm0 2h1v-1h-1zM0 1h1V0H0zm0 2h1V2H0zm0 2h1V4H0zm0 2h1V6H0zm0 2h1V8H0zm0 2h1v-1H0zm0 2h1v-1H0zm0 2h1v-1H0zm0 2h1v-1H0zm8.498-6.957L4.354 5.896l-.708.708 4.852 4.854 4.855-4.854-.707-.707z" />
      </G>
    </Svg>
  );
};