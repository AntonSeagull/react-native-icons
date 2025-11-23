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

export const GrRisk = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M14 10h1V9h-1zm4 0h1V9h-1zm0-4h1V5h-1zm-4 0h1V5h-1zM9 19h1v-1H9zm-4-4h1v-1H5zm5-5H1v13h13v-9m-4 0h13V1H10z" />
      </G>
    </Svg>
  );
};