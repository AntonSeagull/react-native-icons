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

export const TbTransitionTop = (props: IconProps) => {
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
        <Path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3M6 21h12a3 3 0 0 0 0-6H6a3 3 0 0 0 0 6M12 15V7M9 10l3-3 3 3" />
      </G>
    </Svg>
  );
};