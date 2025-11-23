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

export const PiTextboxBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M112 36a12 12 0 0 0-12 12v12H24A20 20 0 0 0 4 80v96a20 20 0 0 0 20 20h76v12a12 12 0 0 0 24 0V48a12 12 0 0 0-12-12M28 172V84h72v88Zm224-92v96a20 20 0 0 1-20 20h-80a12 12 0 0 1 0-24h76V84h-76a12 12 0 0 1 0-24h80a20 20 0 0 1 20 20M88 112a12 12 0 0 1-12 12v20a12 12 0 0 1-24 0v-20a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};