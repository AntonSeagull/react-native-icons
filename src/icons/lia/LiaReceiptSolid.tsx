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

export const LiaReceiptSolid = (props: IconProps) => {
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
        <Path d="M7 5.375V13H3v14h26V13h-4V5.375l-3 1.5-2-1-2 1-2-1-2 1-2-1-2 1Zm5 2.75 2 1 2-1 2 1 2-1 2 1 1-.5V17H9V8.625l1 .5ZM5 15h2v4h18v-4h2v10H5Zm4 6v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Z" />
      </G>
    </Svg>
  );
};