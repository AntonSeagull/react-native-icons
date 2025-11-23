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

export const CiAlignBottom = (props: IconProps) => {
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
        <Path d="M3.548 20.922h16.9a.5.5 0 0 0 0-1h-16.9a.5.5 0 0 0 0 1M9 18.919H6.565a2.5 2.5 0 0 1-2.5-2.5V5.578a2.5 2.5 0 0 1 2.5-2.5H9a2.5 2.5 0 0 1 2.5 2.5v10.841a2.5 2.5 0 0 1-2.5 2.5M6.565 4.078a1.5 1.5 0 0 0-1.5 1.5v10.841a1.5 1.5 0 0 0 1.5 1.5H9a1.5 1.5 0 0 0 1.5-1.5V5.578a1.5 1.5 0 0 0-1.5-1.5ZM17.437 18.919H15a2.5 2.5 0 0 1-2.5-2.5V10.55a2.5 2.5 0 0 1 2.5-2.5h2.434a2.5 2.5 0 0 1 2.5 2.5v5.869a2.5 2.5 0 0 1-2.497 2.5M15 9.05a1.5 1.5 0 0 0-1.5 1.5v5.869a1.5 1.5 0 0 0 1.5 1.5h2.434a1.5 1.5 0 0 0 1.5-1.5V10.55a1.5 1.5 0 0 0-1.5-1.5Z" />
      </G>
    </Svg>
  );
};