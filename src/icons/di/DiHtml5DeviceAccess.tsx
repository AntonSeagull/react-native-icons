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

export const DiHtml5DeviceAccess = (props: IconProps) => {
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
        <Path fill="#444" d="m21.092 10.206 4.59-4.59h-4.919L16 10.379l-4.763-4.763H6.318l4.59 4.59H4.684v16.749h8.189l3.126-3.127 3.127 3.127h8.189V10.206h-6.224zM16 18.907l-4.567 4.569h-3.27v-9.792h15.674v9.792h-3.269z" />
      </G>
    </Svg>
  );
};