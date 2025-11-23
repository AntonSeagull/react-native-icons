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

export const TbBellRinging2Filled = (props: IconProps) => {
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
        <Path d="M9.63 17.531c.612.611.211 1.658-.652 1.706a4 4 0 0 1-3.05-1.166 4 4 0 0 1-1.165-3.049c.046-.826 1.005-1.228 1.624-.726l.082.074zM20.071 3.929c.96.96 1.134 2.41.52 3.547l-.09.153-.024.036a8.01 8.01 0 0 1-1.446 7.137l-.183.223-.191.218-2.073 2.072-.08.112a3 3 0 0 0-.499 2.113l.035.201.045.185c.264.952-.853 1.645-1.585 1.051l-.086-.078L3.101 9.586c-.727-.727-.017-1.945.973-1.671a3 3 0 0 0 2.5-.418l.116-.086 2.101-2.1a8 8 0 0 1 7.265-1.86l.278.071.037-.023a3 3 0 0 1 3.432.192l.14.117.128.12z" />
      </G>
    </Svg>
  );
};