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

export const SiLibreofficewriter = (props: IconProps) => {
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
        <Path d="M22 0v7l-7-7zm0 9v12c0 1.662-1.338 3-3 3H5c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3h8zM6 10h5V9H6zm0 2h5v-1H6zm0 2h5v-1H6zm5 3H6v1h5zm7-2H6v1h12zm0-6h-6v5h6zm-1.5 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M14 11l-1 2h3z" />
      </G>
    </Svg>
  );
};