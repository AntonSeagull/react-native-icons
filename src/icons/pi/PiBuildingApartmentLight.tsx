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

export const PiBuildingApartmentLight = (props: IconProps) => {
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
        <Path d="M240 210h-10V72a6 6 0 0 0-6-6h-42V40a6 6 0 0 0-6-6H80a6 6 0 0 0-6 6v58H32a6 6 0 0 0-6 6v106H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M38 110h42a6 6 0 0 0 6-6V46h84v26a6 6 0 0 0 6 6h42v132h-68v-42a6 6 0 0 0-6-6h-32a6 6 0 0 0-6 6v42H38Zm100 100h-20v-36h20ZM114 72a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m0 32a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m56 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m-84 32a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6m28-32a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m56 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m0 32a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6" />
      </G>
    </Svg>
  );
};