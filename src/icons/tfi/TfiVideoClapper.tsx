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

export const TfiVideoClapper = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M0 1v15h17V1zm16 3h-.268l-2.356-2H16zM8.743 7 11.1 5h2.919l-2.357 2zm-1.94-3L4.446 2h2.918l2.357 2zm2.751 1L7.197 7H4.278l2.356-2zm1.714-1L8.911 2h2.918l2.357 2zM1 2h1.9l2.357 2H1zm0 3h4.089L2.732 7H1zm15 10H1V8h15zm0-8h-2.792l2.356-2H16z" />
      </G>
    </Svg>
  );
};