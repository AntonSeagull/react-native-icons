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

export const SiRiscv = (props: IconProps) => {
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
        <Path d="M6.95.051h16.947v6.21L13.473 21.004l-.524.734-5.789-6.842c4.103-.74 6.21-3.896 6.21-7.37C13.37 4.05 11.263.472 6.95.05m-5.475 13.37 8.74 10.528H0V3.419h5.474c2.945 0 4.422 1.999 4.422 4.107s-1.477 4.21-4.422 4.21H1.475zm14.07 10.528H24V12.157l-7.685 10.738z" />
      </G>
    </Svg>
  );
};