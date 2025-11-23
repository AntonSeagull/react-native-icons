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

export const TbTriangles = (props: IconProps) => {
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
        <Path d="M9.974 21h8.052a.975.975 0 0 0 .81-1.517l-4.025-6.048a.973.973 0 0 0-1.622 0l-4.025 6.048A.977.977 0 0 0 9.974 21" />
        <Path d="M4.98 16h14.04c.542 0 .98-.443.98-.989a1 1 0 0 0-.156-.534l-7.02-11.023a.974.974 0 0 0-1.648 0l-7.02 11.023a1 1 0 0 0 .294 1.366.97.97 0 0 0 .53.157" />
      </G>
    </Svg>
  );
};