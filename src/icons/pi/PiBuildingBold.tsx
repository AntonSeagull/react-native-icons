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

export const PiBuildingBold = (props: IconProps) => {
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
        <Path d="M232 220h-20V36h4a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24h4v184H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24M68 36h120v184h-24v-36a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v36H68Zm72 184h-24v-24h24ZM84 64a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24h-12a12 12 0 0 1-12-12m-52 40a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24h-12a12 12 0 0 1-12-12m-52 40a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24h-12a12 12 0 0 1-12-12" />
      </G>
    </Svg>
  );
};