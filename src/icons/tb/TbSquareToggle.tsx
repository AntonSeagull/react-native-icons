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

export const TbSquareToggle = (props: IconProps) => {
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
        <Path d="M12 2v20M14 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8M20 6a2 2 0 0 0-2-2M18 20a2 2 0 0 0 2-2M20 10v4" />
      </G>
    </Svg>
  );
};