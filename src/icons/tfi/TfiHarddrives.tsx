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

export const TfiHarddrives = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M13.5 12.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5S15 14.827 15 14s-.673-1.5-1.5-1.5m0 2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17 3.15 14.077 0H2.926L0 3.087V9.52h.936L0 10.692V17h17v-6.26l-1.046-1.22H17zM3.355 1h10.286l1.854 2H1.46zM1 16v-4h15v4zm14.906-5H1.033l1.181-1.48h12.424zM1 8.52V4h15v4.52zM13.5 5c-.827 0-1.5.673-1.5 1.5 0 .826.673 1.499 1.5 1.499S15 7.326 15 6.5 14.327 5 13.5 5m0 1.999a.5.5 0 0 1 0-.999.5.5 0 0 1 0 .999" />
      </G>
    </Svg>
  );
};