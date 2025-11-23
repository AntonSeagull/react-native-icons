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

export const TbMouseOff = (props: IconProps) => {
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
        <Path d="M7.733 3.704A4 4 0 0 1 10 3h4a4 4 0 0 1 4 4v7m-.1 3.895A4 4 0 0 1 14 21h-4a4 4 0 0 1-4-4V7q0-.451.096-.874M12 7v1M3 3l18 18" />
      </G>
    </Svg>
  );
};