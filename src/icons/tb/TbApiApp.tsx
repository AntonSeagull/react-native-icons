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

export const TbApiApp = (props: IconProps) => {
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
        <Path d="M12 15H5.5a2.5 2.5 0 1 1 0-5H6M15 12v6.5a2.5 2.5 0 1 1-5 0V18M12 9h6.5a2.5 2.5 0 1 1 0 5H18M9 12V5.5a2.5 2.5 0 0 1 5 0V6" />
      </G>
    </Svg>
  );
};