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

export const CiMaximize2 = (props: IconProps) => {
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
        <Path d="M10.513 3.066H4.93a2.06 2.06 0 0 0-1.15.22 1.6 1.6 0 0 0-.717 1.437v5.793a.5.5 0 0 0 1 0V5.107a2.5 2.5 0 0 1 .022-.689c.115-.373.469-.352.777-.352h5.651a.5.5 0 0 0 0-1M3.063 13.488v5.583a2.06 2.06 0 0 0 .221 1.15 1.6 1.6 0 0 0 1.436.717h5.793a.5.5 0 0 0 0-1H5.1a2.5 2.5 0 0 1-.689-.022c-.372-.115-.352-.469-.352-.777v-5.651a.5.5 0 0 0-1 0ZM13.487 20.934h5.583a2.06 2.06 0 0 0 1.15-.22 1.6 1.6 0 0 0 .717-1.437v-5.793a.5.5 0 0 0-1 0v5.409a2.5 2.5 0 0 1-.022.689c-.115.373-.469.352-.777.352h-5.651a.5.5 0 0 0 0 1M20.937 10.512V4.929a2.06 2.06 0 0 0-.221-1.15 1.6 1.6 0 0 0-1.436-.717h-5.793a.5.5 0 0 0 0 1H18.9a2.5 2.5 0 0 1 .689.022c.372.115.352.469.352.777v5.651a.5.5 0 0 0 1 0Z" />
      </G>
    </Svg>
  );
};