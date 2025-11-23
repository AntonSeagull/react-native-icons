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

export const CiHome = (props: IconProps) => {
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
        <Path d="m19.37 10.22-6.2-7.6a1.5 1.5 0 0 0-2.33-.01l-6.21 7.61a2.5 2.5 0 0 0-.57 1.59v7.63a2.507 2.507 0 0 0 2.5 2.5h10.88a2.507 2.507 0 0 0 2.5-2.5v-7.63a2.5 2.5 0 0 0-.57-1.59M10 20.94v-5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v5.5Zm8.94-1.5a1.51 1.51 0 0 1-1.5 1.5H15v-5.5a2.5 2.5 0 0 0-2.5-2.5h-1a2.5 2.5 0 0 0-2.5 2.5v5.5H6.56a1.51 1.51 0 0 1-1.5-1.5v-7.63a1.47 1.47 0 0 1 .34-.95l6.22-7.61a.47.47 0 0 1 .38-.19.48.48 0 0 1 .39.19l6.21 7.61a1.47 1.47 0 0 1 .34.95Z" />
      </G>
    </Svg>
  );
};