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

export const CiSaveDown2 = (props: IconProps) => {
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
        <Path d="M18.437 20.948H5.563a2.37 2.37 0 0 1-2.5-2.21v-11a2.37 2.37 0 0 1 2.5-2.211h.462a.5.5 0 0 1 0 1h-.462a1.38 1.38 0 0 0-1.5 1.211v11a1.38 1.38 0 0 0 1.5 1.21h12.874a1.38 1.38 0 0 0 1.5-1.21v-11a1.38 1.38 0 0 0-1.5-1.211h-.462a.5.5 0 0 1 0-1h.462a2.37 2.37 0 0 1 2.5 2.211v11a2.37 2.37 0 0 1-2.5 2.21" />
        <Path d="m15.355 10.592-3 3a.5.5 0 0 1-.35.15.5.5 0 0 1-.36-.15l-3-3a.5.5 0 0 1 .71-.71l2.14 2.139V3.552a.51.51 0 0 1 .5-.5.5.5 0 0 1 .5.5v8.49l2.15-2.16a.5.5 0 0 1 .71.71" />
      </G>
    </Svg>
  );
};