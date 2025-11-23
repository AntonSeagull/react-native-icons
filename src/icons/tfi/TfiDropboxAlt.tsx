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

export const TfiDropboxAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m.5 9.344 4.707 3.07L8.5 9.668l-4.745-2.93zM5.207 1.062.5 4.133l3.255 2.605L8.5 3.811zM16.5 4.133l-4.706-3.071L8.5 3.811l4.746 2.927zM8.5 9.668l3.294 2.746 4.706-3.07-3.254-2.606z" />
        <Path d="m8.51 10.259-3.303 2.739-1.413-.924v1.035l4.716 2.829 4.717-2.829v-1.035l-1.414.924z" />
      </G>
    </Svg>
  );
};