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

export const Imreoffice = (props: IconProps) => {
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
        <Path d="M8.354.354A1.4 1.4 0 0 0 7.5 0h-6c-.275 0-.5.225-.5.5v15c0 .275.225.5.5.5h12c.275 0 .5-.225.5-.5v-9c0-.275-.159-.659-.354-.854L8.353.353zM13 15H2V1h5.487a.6.6 0 0 1 .169.07l5.274 5.274a.6.6 0 0 1 .07.169zm.5-15h-3c-.275 0-.341.159-.146.354l3.293 3.293c.194.194.354.129.354-.146v-3c0-.275-.225-.5-.5-.5z" />
      </G>
    </Svg>
  );
};