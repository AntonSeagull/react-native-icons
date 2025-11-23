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

export const LiaRecycleSolid = (props: IconProps) => {
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
        <Path d="M16 3.969a3.27 3.27 0 0 0-2.75 1.5l-2.812 4.625 1.718 1.031 2.813-4.594c.539-.804 1.562-.824 2.094 0l3.125 5-1.5.875L23.313 15V9.688l-1.438.843L18.75 5.47a3.27 3.27 0 0 0-2.75-1.5m-5.594 8.125-4.5 2.594 1.25.75-2.562 4.218-.032-.031c-.011.02.012.043 0 .063C3.09 21.918 4.79 25 7.5 25H13v-2H7.5c-1.266 0-1.945-1.25-1.281-2.219l.031-.031v-.031l2.625-4.25 1.531.937Zm14.657 3.562-1.72 1.063 2.5 4c.641 1.09-.085 2.281-1.25 2.281H19v-2l-4.906 3L19 27v-2h5.594c2.636 0 4.328-3 2.968-5.312v-.032Z" />
      </G>
    </Svg>
  );
};