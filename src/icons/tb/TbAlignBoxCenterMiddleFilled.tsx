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

export const TbAlignBoxCenterMiddleFilled = (props: IconProps) => {
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
        <Path d="M19 2a3 3 0 0 1 2.995 2.824L22 5v14a3 3 0 0 1-2.824 2.995L19 22H5a3 3 0 0 1-2.993-2.802L2 19V5a3 3 0 0 1 2.824-2.995L5 2zm-6 12h-2l-.117.007a1 1 0 0 0 0 1.986L11 16h2l.117-.007a1 1 0 0 0 0-1.986zm2-3H9l-.117.007a1 1 0 0 0 0 1.986L9 13h6l.117-.007a1 1 0 0 0 0-1.986zm-1-3h-4l-.117.007a1 1 0 0 0 0 1.986L10 10h4l.117-.007a1 1 0 0 0 0-1.986z" />
      </G>
    </Svg>
  );
};