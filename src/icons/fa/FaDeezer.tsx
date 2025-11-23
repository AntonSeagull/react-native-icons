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

export const FaDeezer = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 576 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 288, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M451.46 244.71H576V172H451.46Zm0-173.89v72.67H576V70.82Zm0 275.06H576V273.2H451.46ZM0 447.09h124.54v-72.67H0Zm150.47 0H275v-72.67H150.47Zm150.52 0h124.54v-72.67H301Zm150.47 0H576v-72.67H451.46ZM301 345.88h124.53V273.2H301Zm-150.52 0H275V273.2H150.47Zm0-101.17H275V172H150.47Z" />
      </G>
    </Svg>
  );
};