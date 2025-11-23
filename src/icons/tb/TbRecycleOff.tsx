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

export const TbRecycleOff = (props: IconProps) => {
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
        <Path d="m12 17-2 2 2 2m-2-2h9m1.896-2.071a2 2 0 0 0-.146-.679l-.55-1M8.536 11l-.732-2.732L5.072 9m2.732-.732-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141.024M15.464 11l2.732.732L18.928 9m-.732 2.732-4.5-7.794a2 2 0 0 0-3.256-.14l-.591.976M3 3l18 18" />
      </G>
    </Svg>
  );
};