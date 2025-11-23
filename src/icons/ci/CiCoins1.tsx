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

export const CiCoins1 = (props: IconProps) => {
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
        <Path d="M18.46 10.905a3.47 3.47 0 0 0-2.47 1.04 2.3 2.3 0 0 0-.86-1.73 2.26 2.26 0 0 0 .86-1.78 2.29 2.29 0 0 0-2.28-2.29H4.35a2.284 2.284 0 0 0-1.43 4.07 2.282 2.282 0 0 0 0 3.57 2.277 2.277 0 0 0 1.43 4.06h9.36a2.29 2.29 0 0 0 2.06-1.29 3.43 3.43 0 0 0 2.69 1.3 3.475 3.475 0 1 0 0-6.95m-4.75 5.94H4.35a1.28 1.28 0 1 1 0-2.56h9.36a1.28 1.28 0 1 1 0 2.56m0-3.56H4.35a1.285 1.285 0 1 1 0-2.57h9.36a1.285 1.285 0 0 1 0 2.57m0-3.57H4.35a1.285 1.285 0 1 1 0-2.57h9.36a1.285 1.285 0 0 1 0 2.57m4.75 7.14a2.475 2.475 0 1 1 2.48-2.48 2.477 2.477 0 0 1-2.48 2.48" data-name="Coins 1" />
      </G>
    </Svg>
  );
};