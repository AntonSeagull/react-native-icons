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

export const SiLibreoffice = (props: IconProps) => {
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
        <Path d="M16.365 0a.6.6 0 0 0-.555.352.58.58 0 0 0 .128.635l4.985 4.996a.6.6 0 0 0 .635.133.59.59 0 0 0 .363-.53V.577A.605.605 0 0 0 21.335 0zM2.661 0a.59.59 0 0 0-.582.59v22.82a.59.59 0 0 0 .582.59h18.67a.59.59 0 0 0 .59-.59V8.716a.6.6 0 0 0-.17-.42L13.674.182a.6.6 0 0 0-.42-.181zm.59 1.184h9.754l7.733 7.77v13.863H3.251z" />
      </G>
    </Svg>
  );
};