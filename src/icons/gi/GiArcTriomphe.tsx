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

export const GiArcTriomphe = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M64 92v24h24V92zm40 0v24h48V92zm64 0v24h48V92zm64 0v24h48V92zm64 0v24h48V92zm64 0v24h48V92zm64 0v24h24V92zM48 132v16h416v-16zm16 32v112h128.67c4.696-29.122 34.004-56 63.33-56s58.634 26.878 63.33 56H448V164zm17.994 16H184v80H81.373l.56-72.063zM208 180h96v16h-96zm120.063 0h102.005v80H327.441l.559-72.063zM97.869 196l-.371 48H168v-48H97.87zm246.069 0-.372 48h70.502v-48zM64 292v200h128V292zm256 0v200h128V292zM88 414h80v64H88zm256 0h80v64h-80zm-240 16v32h48v-32zm256 0v32h48v-32z" />
      </G>
    </Svg>
  );
};