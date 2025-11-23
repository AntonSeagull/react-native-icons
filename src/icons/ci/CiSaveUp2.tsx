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

export const CiSaveUp2 = (props: IconProps) => {
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
        <Path d="M18.437 20.937H5.563a2.37 2.37 0 0 1-2.5-2.211v-11a2.37 2.37 0 0 1 2.5-2.212h.462a.5.5 0 0 1 0 1h-.462a1.38 1.38 0 0 0-1.5 1.212v11a1.38 1.38 0 0 0 1.5 1.211h12.874a1.38 1.38 0 0 0 1.5-1.211v-11a1.38 1.38 0 0 0-1.5-1.212h-.462a.5.5 0 0 1 0-1h.462a2.37 2.37 0 0 1 2.5 2.212v11a2.37 2.37 0 0 1-2.5 2.211" />
        <Path d="m8.645 6.213 3-3a.5.5 0 0 1 .35-.15.5.5 0 0 1 .36.15l3 3a.5.5 0 0 1-.71.71l-2.14-2.14v8.47a.51.51 0 0 1-.5.5.5.5 0 0 1-.5-.5v-8.49l-2.15 2.16a.5.5 0 0 1-.71-.71" />
      </G>
    </Svg>
  );
};