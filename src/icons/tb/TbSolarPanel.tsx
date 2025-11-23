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

export const TbSolarPanel = (props: IconProps) => {
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
        <Path d="M4.28 14h15.44a1 1 0 0 0 .97-1.243l-1.5-6A1 1 0 0 0 18.22 6H5.78a1 1 0 0 0-.97.757l-1.5 6A1 1 0 0 0 4.28 14M4 10h16M10 6l-1 8M14 6l1 8M12 14v4M7 18h10" />
      </G>
    </Svg>
  );
};