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

export const AiOutlineTwitch = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 512, 512)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M166.133 112 114 251.167v556.466h191.2V912h104.4l104.233-104.4h156.5L879 599V112zm69.534 69.5H809.5v382.633L687.767 685.867H496.5L392.267 790.1V685.867h-156.6zM427 529.4h69.5V320.733H427zm191.167 0H687.7V320.733h-69.533z" />
      </G>
    </Svg>
  );
};