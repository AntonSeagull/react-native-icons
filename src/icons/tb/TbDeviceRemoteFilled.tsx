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

export const TbDeviceRemoteFilled = (props: IconProps) => {
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
        <Path d="M15 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2v1a1 1 0 0 0 .883.993L12 4a1 1 0 0 0 1-1V2zm-5 15a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 11 18.01l-.007-.127A1 1 0 0 0 10 17m4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 15 18.01l-.007-.127A1 1 0 0 0 14 17m-4-3a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 11 15.01l-.007-.127A1 1 0 0 0 10 14m4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 15 15.01l-.007-.127A1 1 0 0 0 14 14m-2-7a3 3 0 0 0-2.995 2.824L9 10a3 3 0 1 0 3-3" />
      </G>
    </Svg>
  );
};