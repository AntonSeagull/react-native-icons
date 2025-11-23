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

export const TiMediaEjectOutline = (props: IconProps) => {
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
        <Path d="M16 21H8c-1.654 0-3-1.346-3-3s1.346-3 3-3h8c1.654 0 3 1.346 3 3s-1.346 3-3 3m-8-4a1.001 1.001 0 0 0 0 2h8a1.001 1.001 0 0 0 0-2zm4-10.134 4.964 5.096L17 12l-10 .004.08-.087zM12 4l-6.433 6.604A2 2 0 0 0 7 14h10a2 2 0 0 0 2-2c0-.543-.218-1.033-.568-1.393z" />
      </G>
    </Svg>
  );
};