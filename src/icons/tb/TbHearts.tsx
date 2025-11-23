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

export const TbHearts = (props: IconProps) => {
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
        <Path d="M14.017 18 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.153 5.784" />
        <Path d="m15.99 20 4.197-4.223a2.81 2.81 0 0 0 0-3.948 2.747 2.747 0 0 0-3.91-.007l-.28.282-.279-.283a2.747 2.747 0 0 0-3.91-.007 2.81 2.81 0 0 0-.007 3.948L15.983 20z" />
      </G>
    </Svg>
  );
};