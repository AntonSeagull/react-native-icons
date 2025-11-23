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

export const PiPlusMinusThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m202.83 58.83-144 144a4 4 0 0 1-5.66-5.66l144-144a4 4 0 1 1 5.66 5.66M68 112a4 4 0 0 0 8 0V76h36a4 4 0 0 0 0-8H76V32a4 4 0 0 0-8 0v36H32a4 4 0 0 0 0 8h36Zm156 68h-80a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8" />
      </G>
    </Svg>
  );
};