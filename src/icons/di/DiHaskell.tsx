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

export const DiHaskell = (props: IconProps) => {
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
        <Path fill="#444" d="m4.619 24.32 5.356-8.034-5.356-8.034h4.017l5.356 8.034-5.356 8.034zm5.356 0 5.356-8.034-5.356-8.034h4.017L24.704 24.32h-4.017l-3.347-5.021-3.348 5.021zm17.406-4.687h-4.463l-1.785-2.678h6.249zm0-4.017H20.24l-1.785-2.678h8.927z" />
      </G>
    </Svg>
  );
};