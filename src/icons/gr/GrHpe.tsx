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

export const GrHpe = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#00C781" fillRule="evenodd" d="M2 6h44v12H2zm3 3h38v6H5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};