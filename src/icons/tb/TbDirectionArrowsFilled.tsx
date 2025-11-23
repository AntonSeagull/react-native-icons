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

export const TbDirectionArrowsFilled = (props: IconProps) => {
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
        <Path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-20 0l.004-.28C2.152 6.327 6.57 2 12 2m-.293 13.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l1-1a1 1 0 0 0 0-1.414l-.094-.083a1 1 0 0 0-1.32.083l-.293.292zm-3-5a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 0 1.414l1 1a1 1 0 0 0 1.414 0l.083-.094a1 1 0 0 0-.083-1.32L8.415 12l.292-.293a1 1 0 0 0 0-1.414m8 0a1 1 0 0 0-1.414 0l-.083.094a1 1 0 0 0 .083 1.32l.292.292-.292.294a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414zm-4-4a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 0 1.414l.094.083a1 1 0 0 0 1.32-.083L12 8.415l.293.292a1 1 0 0 0 1.414-1.414z" />
      </G>
    </Svg>
  );
};