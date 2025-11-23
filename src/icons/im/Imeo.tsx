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

export const Imeo = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15.994 4.281q-.107 2.336-3.263 6.397-3.263 4.24-5.522 4.241-1.398.001-2.366-2.581-.645-2.367-1.291-4.734-.717-2.582-1.541-2.581-.179.002-1.256.753l-.753-.969q1.187-1.041 2.334-2.081 1.58-1.362 2.372-1.438 1.868-.18 2.3 2.553.464 2.949.647 3.666.538 2.447 1.184 2.447.502.001 1.509-1.588 1.003-1.584 1.078-2.416.146-1.37-1.078-1.372a3 3 0 0 0-1.184.263Q10.343.979 13.67 1.088q2.462.066 2.322 3.194z" />
      </G>
    </Svg>
  );
};