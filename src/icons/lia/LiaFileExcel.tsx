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

export const LiaFileExcel = (props: IconProps) => {
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
        <Path d="M6 3v26h20V9.6l-.3-.3-6-6-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM11 13l3.8 5.5L11 24h2.4l2.6-3.8 2.6 3.8H21l-3.8-5.5L21 13h-2.4L16 16.8 13.4 13z" />
      </G>
    </Svg>
  );
};