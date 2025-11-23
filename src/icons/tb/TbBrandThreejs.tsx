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

export const TbBrandThreejs = (props: IconProps) => {
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
        <Path d="M8 22 3 3l19 5.5z" />
        <Path d="m12.573 17.58-6.152-1.576 8.796-9.466 1.914 6.64" />
        <Path d="M12.573 17.58 11 11l6.13 2.179M9.527 4.893 11 11 4.69 9.436z" />
      </G>
    </Svg>
  );
};