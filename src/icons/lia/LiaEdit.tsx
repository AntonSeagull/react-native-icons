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

export const LiaEdit = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M25 4.031c-.766 0-1.516.297-2.094.875L13 14.781l-.219.219-.062.313-.688 3.5-.312 1.468 1.469-.312 3.5-.688.312-.062.219-.219 9.875-9.906A2.968 2.968 0 0 0 25 4.03m0 1.938c.234 0 .465.12.688.343.445.446.445.93 0 1.375L16 17.376l-1.719.344.344-1.719 9.688-9.687c.222-.223.453-.344.687-.344M4 8v20h20V14.813l-2 2V26H6V10h9.188l2-2Z" />
      </G>
    </Svg>
  );
};