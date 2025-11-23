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

export const SiSencha = (props: IconProps) => {
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
        <Path d="M15.287 24c.458-1.221.917-1.532.917-2.442 0-1.452-.878-2.8-2.237-3.434l-5.831-2.813C5.211 13.85 3.392 10.97 3.392 7.797c0-3.23 1.867-6.133 4.871-7.576L8.712 0a3.72 3.72 0 0 0-.916 2.44c0 1.453.878 2.801 2.237 3.435l5.831 2.813c2.926 1.462 4.744 4.342 4.744 7.514 0 3.23-1.867 6.133-4.871 7.577z" />
      </G>
    </Svg>
  );
};