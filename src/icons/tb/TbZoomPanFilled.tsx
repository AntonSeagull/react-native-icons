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

export const TbZoomPanFilled = (props: IconProps) => {
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
        <Path d="M12 8a4 4 0 0 1 3.447 6.031l2.26 2.262a1 1 0 0 1-1.414 1.414l-2.262-2.26A4 4 0 0 1 8 12l.005-.2A4 4 0 0 1 12 8M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 1 1-1.414 1.414L12 3.415l-1.293 1.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414zM19.293 9.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L20.585 12l-1.292-1.293a1 1 0 0 1-.083-1.32zM3.293 9.293a1 1 0 1 1 1.414 1.414L3.415 12l1.292 1.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414zM9.293 19.293a1 1 0 0 1 1.414 0L12 20.585l1.294-1.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414" />
      </G>
    </Svg>
  );
};