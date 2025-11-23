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

export const TbBorderBottom = (props: IconProps) => {
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
        <Path d="M20 20H4M4 4v.01M8 4v.01M12 4v.01M16 4v.01M20 4v.01M4 8v.01M12 8v.01M20 8v.01M4 12v.01M8 12v.01M12 12v.01M16 12v.01M20 12v.01M4 16v.01M12 16v.01M20 16v.01" />
      </G>
    </Svg>
  );
};