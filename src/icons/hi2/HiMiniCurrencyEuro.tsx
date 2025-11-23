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

export const HiMiniCurrencyEuro = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16M8.798 7.45c.512-.67 1.135-.95 1.702-.95s1.19.28 1.702.95a.75.75 0 0 0 1.192-.91C12.637 5.55 11.596 5 10.5 5s-2.137.55-2.894 1.54A5.2 5.2 0 0 0 6.83 8H5.75a.75.75 0 0 0 0 1.5h.77a6.3 6.3 0 0 0 0 1h-.77a.75.75 0 0 0 0 1.5h1.08a5.2 5.2 0 0 0 .776 1.46C8.363 14.45 9.404 15 10.5 15s2.137-.55 2.894-1.54a.75.75 0 0 0-1.192-.91c-.512.67-1.135.95-1.702.95s-1.19-.28-1.702-.95a3.5 3.5 0 0 1-.343-.55h1.795a.75.75 0 0 0 0-1.5H8.026a5 5 0 0 1 0-1h2.224a.75.75 0 0 0 0-1.5H8.455q.147-.294.343-.55" clipRule="evenodd" />
      </G>
    </Svg>
  );
};