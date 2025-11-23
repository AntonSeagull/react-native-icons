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

export const LiaEraserSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M18.906 4.094c-.804 0-1.64.273-2.281.843v.032L16.594 5 4.906 16.594c-1.21 1.21-1.203 3.183-.062 4.468l.031.032h.031l6 6c1.211 1.21 3.184 1.203 4.469.062v-.031L27 15.5c1.266-1.266 1.305-3.29.094-4.5l-6-6a3.06 3.06 0 0 0-2.188-.906m-.031 2.031c.32 0 .617.086.813.281l6 6c.386.387.44 1.153-.094 1.688l-5.032 5.031-7.656-7.656 5.063-5.031.031-.032c.254-.21.57-.281.875-.281m-7.406 6.781 7.656 7.656-5.094 5.094c-.011.008-.02.024-.031.032-.516.43-1.309.378-1.687 0l-5.97-5.938c-.015-.02-.015-.043-.03-.062-.41-.516-.375-1.313 0-1.688Z" />
      </G>
    </Svg>
  );
};