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

export const LiaFilePrescriptionSolid = (props: IconProps) => {
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
        <Path d="M6 3v26h20V9.6l-.3-.3-6-6-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM11 11v9h2v-3h.6l2.5 4.4L14 25h2l1-1.8 1 1.8h2l-2-3.6 2-3.4h-2l-1 1.7-1.7-3c1-.5 1.6-1.5 1.6-2.7 0-1.6-1.4-3-3-3zm2 2h1c.6 0 1 .4 1 1s-.4 1-1 1h-1z" />
      </G>
    </Svg>
  );
};