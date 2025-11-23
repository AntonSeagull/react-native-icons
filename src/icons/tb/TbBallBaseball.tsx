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

export const TbBallBaseball = (props: IconProps) => {
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
        <Path d="M5.636 18.364A9 9 0 1 0 18.364 5.636 9 9 0 0 0 5.636 18.364" />
        <Path d="M12.495 3.02a9 9 0 0 1-9.475 9.475M20.98 11.505a9 9 0 0 0-9.475 9.475M9 9l2 2M13 13l2 2M11 7l2 1M7 11l1 2M16 11l1 2M11 16l2 1" />
      </G>
    </Svg>
  );
};