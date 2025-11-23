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

export const SiApachecordova = (props: IconProps) => {
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
        <Path d="M18.545.545H5.455L0 9.273l2.182 14.182h3.886l-.273-3.273h1.909l.273 3.273h8.045l.273-3.273h1.909l-.273 3.273h3.886L24 9.273zm0 17.455H5.455L4.364 9.273l2.182-4.364h3.506l-.234 1.636h4.364l-.234-1.636h3.506l2.182 4.364zm-3-6.955c.301 0 .545.908.545 2.029s-.244 2.029-.545 2.029S15 14.195 15 13.074s.244-2.029.545-2.029m-6.886.17c.301 0 .545.908.545 2.029s-.244 2.029-.545 2.029-.545-.908-.545-2.029.244-2.029.545-2.029" />
      </G>
    </Svg>
  );
};