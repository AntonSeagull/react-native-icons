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

export const TfiPieChart = (props: IconProps) => {
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
        <Path d="m14.985 8.943.998.067C15.72 12.93 12.433 16 8.5 16 4.364 16 1 12.636 1 8.5c0-3.905 3.047-7.19 6.938-7.479l.074.997C4.641 2.268 2 5.115 2 8.5 2 12.084 4.916 15 8.5 15c3.409 0 6.257-2.66 6.485-6.057M17 7.499v.5l-.501.017H9.017V-.001L9.518 0C13.644.009 17 3.374 17 7.499m-1.014-.483c-.223-3.17-2.776-5.743-5.969-5.995v5.995z" />
      </G>
    </Svg>
  );
};