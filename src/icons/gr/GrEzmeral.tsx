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

export const GrEzmeral = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#01A982" d="M7 8h34v8H7z" />
        <Path fill="#00775B" d="M1 8h6v8H1zM41 8h6v8h-6zM7 16h34v6H7z" />
        <Path fill="#00C781" d="M7 2h34v6H7z" />
        <Path fill="#01A982" d="m1 8 6-6v6zM1 16l6 6v-6zM47 8l-6-6v6zM47 16l-6 6v-6z" />
      </G>
    </Svg>
  );
};