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

export const SiLibreofficeimpress = (props: IconProps) => {
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
        <Path d="M22 0v7l-7-7zm-9 0 9 9v12c0 1.662-1.338 3-3 3H5c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3zM7 17H6v1h1zm0-2H6v1h1zm0-2H6v1h1zm3 4H8v1h2zm0-2H8v1h2zm0-2H8v1h2zm6-1v-1H8v1zm2 1h-7v5h7zm0-4H6v1h12zm-4 6.707 1 1 2.207-2.207-.707-.707-1.5 1.5-1-1-2.207 2.207.707.707z" />
      </G>
    </Svg>
  );
};