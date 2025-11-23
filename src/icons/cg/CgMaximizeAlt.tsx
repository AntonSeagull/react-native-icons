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

export const CgMaximizeAlt = (props: IconProps) => {
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
        <Path fill="currentColor" d="M3 3h6v2H6.462l4.843 4.843-1.415 1.414L5 6.367V9H3zM3 21h6v-2H6.376l4.929-4.928-1.415-1.414L5 17.548V15H3zM15 21h6v-6h-2v2.524l-4.867-4.866-1.414 1.414L17.647 19H15zM21 3h-6v2h2.562l-4.843 4.843 1.414 1.414L19 6.39V9h2z" />
      </G>
    </Svg>
  );
};