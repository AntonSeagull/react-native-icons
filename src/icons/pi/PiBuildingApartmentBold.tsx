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

export const PiBuildingApartmentBold = (props: IconProps) => {
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
        <Path d="M240 204h-4V76a12 12 0 0 0-12-12h-36V40a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v60H32a12 12 0 0 0-12 12v92h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24M44 124h36a12 12 0 0 0 12-12V52h72v24a12 12 0 0 0 12 12h36v116h-64v-28a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v28H44Zm64-48a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12m0 36a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12m-64 36a12 12 0 0 1-12 12H68a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12m12 0a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12" />
      </G>
    </Svg>
  );
};