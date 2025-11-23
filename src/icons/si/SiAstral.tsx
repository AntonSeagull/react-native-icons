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

export const SiAstral = (props: IconProps) => {
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
        <Path d="M1.44 0C.642 0 0 .642 0 1.44v21.12C0 23.358.642 24 1.44 24h21.12c.798 0 1.44-.642 1.44-1.44V1.44C24 .642 23.358 0 22.56 0Zm4.8 4.8h11.52c.795 0 1.44.645 1.44 1.44V19.2h-6.624v-4.32h-1.152v4.32H4.8V6.24c0-.795.645-1.44 1.44-1.44m4.032 5.472v1.152h3.456v-1.152z" />
      </G>
    </Svg>
  );
};