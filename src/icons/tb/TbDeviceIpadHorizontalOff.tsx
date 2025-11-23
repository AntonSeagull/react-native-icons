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

export const TbDeviceIpadHorizontalOff = (props: IconProps) => {
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
        <Path d="M8 4h12a2 2 0 0 1 2 2v12m-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2M9 17h6M3 3l18 18" />
      </G>
    </Svg>
  );
};