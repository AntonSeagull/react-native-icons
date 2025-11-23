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

export const TbBrandGit = (props: IconProps) => {
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
        <Path d="M15 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M12 15V9M15 11l-2-2M11 7 9.1 5.1" />
        <Path d="m13.446 2.6 7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1-2.892 0l-7.955-7.955a2.045 2.045 0 0 1 0-2.892l7.955-7.955a2.045 2.045 0 0 1 2.892 0z" />
      </G>
    </Svg>
  );
};