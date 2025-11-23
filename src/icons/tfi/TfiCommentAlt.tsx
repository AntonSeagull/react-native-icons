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

export const TfiCommentAlt = (props: IconProps) => {
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
        <Path d="M15.5 0h-14C.673 0 0 .673 0 1.5v10c0 .827.673 1.5 1.5 1.5H2v4.102L6.688 13H15.5c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5m.5 11.5a.5.5 0 0 1-.5.5H6.312L3 14.898V12H1.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5zM3 3h11v1H3zm0 2h11v1H3zm0 2h6v1H3z" />
      </G>
    </Svg>
  );
};