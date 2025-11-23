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

export const PiGpsSlashBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M252 128a12 12 0 0 1-12 12h-20.79a91.7 91.7 0 0 1-3.56 16 12 12 0 0 1-11.43 8.35 12.2 12.2 0 0 1-3.65-.57 12 12 0 0 1-7.78-15.09A68.06 68.06 0 0 0 128 60a68.7 68.7 0 0 0-14.48 1.54 12 12 0 1 1-5.08-23.45c2.49-.54 5-1 7.56-1.31V16a12 12 0 0 1 24 0v20.78A92.21 92.21 0 0 1 219.22 116H240a12 12 0 0 1 12 12m-35.12 79.93a12 12 0 1 1-17.76 16.14l-18.65-20.51A91.6 91.6 0 0 1 140 219.2V240a12 12 0 0 1-24 0v-20.78A92.21 92.21 0 0 1 36.78 140H16a12 12 0 0 1 0-24h20.79a92.36 92.36 0 0 1 21-47.42L39.12 48.07a12 12 0 1 1 17.76-16.14l133.81 147.18Zm-52.74-22.33-90-99a68 68 0 0 0 90 99" />
      </G>
    </Svg>
  );
};