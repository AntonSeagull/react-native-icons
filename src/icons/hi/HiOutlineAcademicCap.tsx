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

export const HiOutlineAcademicCap = (props: IconProps) => {
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
        <Path d="m12 14 9-5-9-5-9 5z" />
        <Path d="m12 14 6.16-3.422a12.1 12.1 0 0 1 .665 6.479A11.95 11.95 0 0 0 12 20.055a11.95 11.95 0 0 0-6.824-2.998 12.1 12.1 0 0 1 .665-6.479z" />
        <Path strokeLinecap="round" strokeLinejoin="round" d="m12 14 9-5-9-5-9 5zm0 0 6.16-3.422a12.1 12.1 0 0 1 .665 6.479A11.95 11.95 0 0 0 12 20.055a11.95 11.95 0 0 0-6.824-2.998 12.1 12.1 0 0 1 .665-6.479zm-4 6v-7.5l4-2.222" />
      </G>
    </Svg>
  );
};