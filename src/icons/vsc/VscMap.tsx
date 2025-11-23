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

export const VscMap = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M2.5 5.777v6.32l3-1.874V3.902zm4-1.875v6.32l3 1.876V5.777zM6 11.09l-3.735 2.334L1.5 13V5.5l.235-.424 4-2.5h.53L10 4.91l3.735-2.334L14.5 3v7.5l-.235.424-4 2.5h-.53zm4.5-5.313v6.32l3-1.874V3.902z" />
      </G>
    </Svg>
  );
};