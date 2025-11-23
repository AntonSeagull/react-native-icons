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

export const TbTopologyBus = (props: IconProps) => {
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
        <Path d="M14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0M22 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0M2 16h20M4 12v4M12 12v4M20 12v4" />
      </G>
    </Svg>
  );
};