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

export const TbBookmarksFilled = (props: IconProps) => {
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
        <Path d="M12 6a4 4 0 0 1 4 4v11a1 1 0 0 1-1.514.857L10 19.166l-4.486 2.691a1 1 0 0 1-1.508-.743L4 21V10a4 4 0 0 1 4-4z" />
        <Path d="M16 2a4 4 0 0 1 4 4v11a1 1 0 0 1-2 0V6a2 2 0 0 0-2-2h-5a1 1 0 0 1 0-2z" />
      </G>
    </Svg>
  );
};