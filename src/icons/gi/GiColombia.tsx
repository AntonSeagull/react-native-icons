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

export const GiColombia = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m300.285 18.627 16.062 11.568c-61.797 55.453-66.367 51.932-35.505 133.25l140.122 32.45c-15.192 70.066-3.262 87.445 13.239 129.328l-74.323.29c1.584 53.786 13.364 101.907-6.953 167.86l-24.831-8.94 6.952-46.682-70.35 6.09c-51.27-68.647-121.674-90.653-186.9-125.28 29.958-14.76 57.869-31.287 67.54-63.568L126.466 143.75c41.01-47.538 75.07-92.922 173.819-125.123" />
      </G>
    </Svg>
  );
};