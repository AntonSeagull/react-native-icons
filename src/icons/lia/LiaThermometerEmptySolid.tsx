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

export const LiaThermometerEmptySolid = (props: IconProps) => {
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
        <Path d="M13 5v11c-1.738 1.05-3 2.828-3 5 0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.172-1.262-3.95-3-5v-1h2v-2h-2v-2h2V9h-2V7h2V5Zm2 2h2v10.063l.594.28C19.004 17.962 20 19.353 20 21c0 2.219-1.781 4-4 4s-4-1.781-4-4c0-1.648.996-3.04 2.406-3.656l.594-.282Z" />
      </G>
    </Svg>
  );
};