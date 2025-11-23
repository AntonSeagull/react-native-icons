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

export const LiaThermometerHalfSolid = (props: IconProps) => {
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
        <Path d="M12 4v11.5c-1.8 1.3-3 3.2-3 5.5 0 3.9 3.1 7 7 7s7-3.1 7-7c0-2.3-1.3-4.3-3-5.5V14h2v-2h-2v-2h2V8h-2V6h2V4zm2 2h4v10.4l.5.3c1.5.9 2.5 2.4 2.5 4.3 0 2.8-2.2 5-5 5s-5-2.2-5-5c0-1.9 1-3.4 2.5-4.3l.5-.3zm1 7v5.2c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.8-2.4-2-2.8V13z" />
      </G>
    </Svg>
  );
};