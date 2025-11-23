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

export const GrGooglePlay = (props: IconProps) => {
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
        <Path fill="#EA4335" d="M11.128 12.003 1.09 22.011a2.73 2.73 0 0 0 3.999 1.62l11.29-6.377-5.251-5.25Z" />
        <Path fill="#FBBC04" d="m21.338 9.67-4.899-2.806-5.311 5.14 5.251 5.25 4.944-2.865a2.663 2.663 0 0 0 0-4.719z" />
        <Path fill="#4285F4" d="M1.09 1.995q-.09.339-.09.69V21.32q0 .351.09.69l10.038-10.007z" />
        <Path fill="#34A853" d="m11.128 12.003 5.311-5.139L5.126.383A2.8 2.8 0 0 0 3.723 0 2.73 2.73 0 0 0 1.09 1.988z" />
      </G>
    </Svg>
  );
};