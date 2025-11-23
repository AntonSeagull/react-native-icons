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

export const MdBorderLeft = (props: IconProps) => {
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
        <Path d="M11 21h2v-2h-2zm0-4h2v-2h-2zm0-12h2V3h-2zm0 4h2V7h-2zm0 4h2v-2h-2zm-4 8h2v-2H7zM7 5h2V3H7zm0 8h2v-2H7zm-4 8h2V3H3zM19 9h2V7h-2zm-4 12h2v-2h-2zm4-4h2v-2h-2zm0-14v2h2V3zm0 10h2v-2h-2zm0 8h2v-2h-2zm-4-8h2v-2h-2zm0-8h2V3h-2z" />
      </G>
    </Svg>
  );
};