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

export const HiAcademicCap = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10.394 2.08a1 1 0 0 0-.788 0l-7 3a1 1 0 0 0 0 1.84L5.25 8.051a1 1 0 0 1 .356-.257l4-1.714a1 1 0 1 1 .788 1.838l-2.727 1.17 1.94.831a1 1 0 0 0 .787 0l7-3a1 1 0 0 0 0-1.838zM3.31 9.397 5 10.12v4.102a9 9 0 0 0-1.05-.174 1 1 0 0 1-.89-.89 11.1 11.1 0 0 1 .25-3.762zm5.99 7.176A9 9 0 0 0 7 14.935v-3.957l1.818.78a3 3 0 0 0 2.364 0l5.508-2.361a11 11 0 0 1 .25 3.762 1 1 0 0 1-.89.89 8.97 8.97 0 0 0-5.35 2.524 1 1 0 0 1-1.4 0M6 18a1 1 0 0 0 1-1v-2.065a9 9 0 0 0-2-.712V17a1 1 0 0 0 1 1" />
      </G>
    </Svg>
  );
};