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

export const PiCertificateFill = (props: IconProps) => {
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
        <Path d="M232 86.53V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h120v24a8 8 0 0 0 12 7l24-13.74L220 231a8 8 0 0 0 12-7v-62.53a51.88 51.88 0 0 0 0-74.94M128 144H72a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m88 98.21-16-9.16a8 8 0 0 0-7.94 0l-16 9.16V172a51.88 51.88 0 0 0 40 0ZM196 160a36 36 0 1 1 36-36 36 36 0 0 1-36 36" />
      </G>
    </Svg>
  );
};