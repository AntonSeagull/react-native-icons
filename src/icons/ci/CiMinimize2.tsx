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

export const CiMinimize2 = (props: IconProps) => {
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
        <Path d="M3.563 11.016h5.583A2.06 2.06 0 0 0 10.3 10.8a1.6 1.6 0 0 0 .717-1.436V3.566a.5.5 0 0 0-1 0v5.408a2.5 2.5 0 0 1-.022.689c-.115.373-.468.353-.777.353H3.563a.5.5 0 0 0 0 1M11.013 20.438v-5.583a2.07 2.07 0 0 0-.22-1.15 1.6 1.6 0 0 0-1.437-.717H3.563a.5.5 0 0 0 0 1h5.409a2.5 2.5 0 0 1 .689.022c.373.115.352.469.352.777v5.651a.5.5 0 0 0 1 0M20.437 12.984h-5.583a2.06 2.06 0 0 0-1.15.221 1.6 1.6 0 0 0-.717 1.436v5.793a.5.5 0 0 0 1 0v-5.408a2.5 2.5 0 0 1 .022-.689c.115-.373.468-.353.777-.353h5.651a.5.5 0 0 0 0-1M12.987 3.562v5.583a2.07 2.07 0 0 0 .22 1.15 1.6 1.6 0 0 0 1.437.717h5.793a.5.5 0 0 0 0-1h-5.409a2.5 2.5 0 0 1-.689-.022c-.373-.115-.352-.469-.352-.777V3.562a.5.5 0 0 0-1 0" />
      </G>
    </Svg>
  );
};