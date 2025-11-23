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

export const TbFlask2Off = (props: IconProps) => {
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
        <Path d="M6.1 15H15M17.742 17.741A6 6 0 0 1 15.318 21H8.683A6 6 0 0 1 10 10.34v-.326M10 6V3h4v7m.613.598a6 6 0 0 1 2.801 2.817M9 3h6M3 3l18 18" />
      </G>
    </Svg>
  );
};