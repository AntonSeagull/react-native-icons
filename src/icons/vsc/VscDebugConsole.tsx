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

export const VscDebugConsole = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m7.04 1.361.139-.057H21.32l.14.057 1.178 1.179.057.139V16.82l-.057.14-1.179 1.178-.139.057H14V18a2 2 0 0 0-.548-1.375h7.673V2.875H7.375v7.282a5.7 5.7 0 0 0-1.571-.164V2.679l.057-.14L7.04 1.362zm9.531 9.452-2.809 2.8a2 2 0 0 0-.348-.467l-.419-.42 2.236-2.235-3.606-3.694.813-.833 4.133 4.133zM9.62 14.82l1.32-1.32L12 14.56l-1.72 1.72.22.22V18H12v1.45h-1.5v.1a6 6 0 0 1-.41 1.45L12 22.94 10.94 24l-1.65-1.65A4.3 4.3 0 0 1 6 24a4.31 4.31 0 0 1-3.29-1.65L1.06 24 0 22.94 1.91 21a6 6 0 0 1-.41-1.42v-.08H0V18h1.5v-1.5l.22-.22L0 14.56l1.06-1.06 1.32 1.32a3.73 3.73 0 0 1 7.24 0m-2.029-.661A2.25 2.25 0 0 0 3.75 15.75h4.5a2.25 2.25 0 0 0-.659-1.591m.449 7.38A3.33 3.33 0 0 0 9 19.5v-2.25H3v2.25a3.33 3.33 0 0 0 3 3 3.33 3.33 0 0 0 2.04-.96z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};