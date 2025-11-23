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

export const TbExposureOff = (props: IconProps) => {
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
        <Path d="m3.6 20.4 8.371-8.371m2.04-2.04L20.4 3.6M6 8h2m0 0v2M14 16h2M7 3h12a2 2 0 0 1 2 2v12m-.5 3.5c-.362.36-.95.5-1.5.5H5a2 2 0 0 1-2-2V5c0-.541.215-1.033.565-1.393M3 3l18 18" />
      </G>
    </Svg>
  );
};