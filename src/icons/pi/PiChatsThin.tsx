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

export const PiChatsThin = (props: IconProps) => {
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
        <Path d="M216 84h-36V48a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v128a4 4 0 0 0 4 4 4 4 0 0 0 2.51-.89L73 148h3v36a12 12 0 0 0 12 12h95l38.49 31.11a4 4 0 0 0 2.51.89 4 4 0 0 0 4-4V96a12 12 0 0 0-12-12M71.58 140a4 4 0 0 0-2.51.89L36 167.62V48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v88a4 4 0 0 1-4 4ZM220 215.62l-33.07-26.73a4 4 0 0 0-2.51-.89H88a4 4 0 0 1-4-4v-36h84a12 12 0 0 0 12-12V92h36a4 4 0 0 1 4 4Z" />
      </G>
    </Svg>
  );
};