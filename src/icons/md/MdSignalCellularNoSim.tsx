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

export const MdSignalCellularNoSim = (props: IconProps) => {
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
        <Path fill="none" d="M-618-2872H782V728H-618zM-1 0h26v24H-1zm1 0h24v24H0z" />
        <Path d="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68zM3.65 3.88 2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27z" />
        <Path fill="none" d="M.01 0h24v24h-24z" />
      </G>
    </Svg>
  );
};