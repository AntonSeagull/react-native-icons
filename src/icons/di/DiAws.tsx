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

export const DiAws = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 34 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 17, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="m10.871 28.625-3.22-1.155v-4.72l3.22 1.097zM11.461 28.625l3.22-1.155v-4.72l-3.22 1.097zM7.981 22.396l3.259-.917 3.022.974-3.022 1.026zM7.037 22.031l-3.22-1.155v-4.72l3.22 1.097zM7.628 22.031l3.22-1.155v-4.72l-3.22 1.097zM4.148 15.802l3.259-.917 3.022.975-3.022 1.026zM14.551 22.031l-3.221-1.155v-4.72l3.221 1.097zM15.142 22.031l3.22-1.155v-4.72l-3.22 1.097zM11.662 15.802l3.259-.917 3.022.975-3.022 1.026zM18.385 15.436l-3.22-1.155v-4.72l3.22 1.097zM18.976 15.436l3.22-1.155v-4.72l-3.22 1.097zM15.496 9.208l3.259-.917 3.022.974-3.022 1.026zM25.899 15.436l-3.22-1.155v-4.72l3.22 1.097zM26.49 15.436l3.221-1.155v-4.72l-3.221 1.097zM23.01 9.208l3.259-.917 3.022.974-3.022 1.026z" />
      </G>
    </Svg>
  );
};