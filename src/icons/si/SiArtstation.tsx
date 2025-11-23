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

export const SiArtstation = (props: IconProps) => {
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
        <Path d="m0 17.723 2.027 3.505h.001a2.42 2.42 0 0 0 2.164 1.333h13.457l-2.792-4.838zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.42 2.42 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467m-11.129-3.462L7.428 4.858l-5.444 9.428z" />
      </G>
    </Svg>
  );
};