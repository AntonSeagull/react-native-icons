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

export const GrFigma = (props: IconProps) => {
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
        <Circle cx={12} cy={12} r={4} fill="#19BCFE" />
        <Path fill="#09CF83" d="M4 24a4 4 0 0 0 4-4v-4H4a4 4 0 1 0 0 8" />
        <Path fill="#A259FF" d="M4 16h4V8H4a4 4 0 1 0 0 8" />
        <Path fill="#F24E1E" d="M4 8h4V0H4a4 4 0 1 0 0 8" />
        <Path fill="#FF7262" d="M12 8H8V0h4a4 4 0 1 1 0 8" />
      </G>
    </Svg>
  );
};