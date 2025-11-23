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

export const TbArticleFilled = (props: IconProps) => {
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
        <Path d="M19 3a3 3 0 0 1 2.995 2.824L22 6v12a3 3 0 0 1-2.824 2.995L19 21H5a3 3 0 0 1-2.995-2.824L2 18V6a3 3 0 0 1 2.824-2.995L5 3zm-2 12H7l-.117.007a1 1 0 0 0 0 1.986L7 17h10l.117-.007a1 1 0 0 0 0-1.986zm0-4H7l-.117.007a1 1 0 0 0 0 1.986L7 13h10l.117-.007a1 1 0 0 0 0-1.986zm0-4H7l-.117.007a1 1 0 0 0 0 1.986L7 9h10l.117-.007a1 1 0 0 0 0-1.986z" />
      </G>
    </Svg>
  );
};