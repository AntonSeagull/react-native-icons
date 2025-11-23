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

export const PiPersonSimpleCircleBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84M108 80a20 20 0 1 1 20 20 20 20 0 0 1-20-20m76 40a12 12 0 0 1-12 12h-32v.51l26.12 41.05a12 12 0 0 1-3.68 16.56A11.83 11.83 0 0 1 156 192a12 12 0 0 1-10.13-5.56L128 158.35l-17.88 28.09a12 12 0 0 1-20.24-12.88L116 132.51V132H84a12 12 0 0 1 0-24h88a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};