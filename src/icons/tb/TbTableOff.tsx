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

export const TbTableOff = (props: IconProps) => {
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
        <Path d="M7 3h12a2 2 0 0 1 2 2v12m-.585 3.413A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5c0-.55.223-1.05.583-1.412M3 10h7m4 0h7M10 3v3m0 4v11M3 3l18 18" />
      </G>
    </Svg>
  );
};