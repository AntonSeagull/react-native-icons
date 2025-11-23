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

export const SiTmux = (props: IconProps) => {
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
        <Path d="M24 2.251V10.5H12.45V0h9.3A2.25 2.25 0 0 1 24 2.251M12.45 11.4H24v10.5h-.008A2.25 2.25 0 0 1 21.75 24H2.25a2.247 2.247 0 0 1-2.242-2.1H0V2.251A2.25 2.25 0 0 1 2.25 0h9.3v21.6h.9zm11.242 10.5H.308a1.95 1.95 0 0 0 1.942 1.8h19.5a1.95 1.95 0 0 0 1.942-1.8" />
      </G>
    </Svg>
  );
};