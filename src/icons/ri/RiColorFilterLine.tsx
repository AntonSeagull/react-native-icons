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

export const RiColorFilterLine = (props: IconProps) => {
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
        <Path d="M12 3a4 4 0 0 1 3.696 5.533 6 6 0 0 0-4.216 2.434A4 4 0 0 1 8 7a4 4 0 0 1 4-4m5.764 5.672a6 6 0 1 0-11.527 0A6 6 0 1 0 12 18.655a6 6 0 1 0 5.764-9.983m-4.61 8.262a6 6 0 0 0 0-4.867 4.001 4.001 0 1 1 0 4.867m-1.79-3.967a4.001 4.001 0 1 1-4.214-2.434 6 6 0 0 0 4.215 2.434" />
      </G>
    </Svg>
  );
};