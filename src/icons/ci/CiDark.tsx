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

export const CiDark = (props: IconProps) => {
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
        <Path d="M12.741 20.917a9.4 9.4 0 0 1-1.395-.105 9.141 9.141 0 0 1-1.465-17.7 1.18 1.18 0 0 1 1.21.281 1.27 1.27 0 0 1 .325 1.293 8.1 8.1 0 0 0-.353 2.68 8.27 8.27 0 0 0 4.366 6.857 7.6 7.6 0 0 0 3.711.993 1.242 1.242 0 0 1 .994 1.963 9.15 9.15 0 0 1-7.393 3.738M10.261 4.05a.2.2 0 0 0-.065.011 8.137 8.137 0 1 0 9.131 12.526.22.22 0 0 0 .013-.235.23.23 0 0 0-.206-.136 8.6 8.6 0 0 1-4.188-1.116 9.27 9.27 0 0 1-4.883-7.7 9.1 9.1 0 0 1 .4-3.008.29.29 0 0 0-.069-.285.18.18 0 0 0-.133-.057" />
      </G>
    </Svg>
  );
};