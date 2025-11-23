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

export const RxCodesandboxLogo = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M7.711.797a.5.5 0 0 0-.422 0l-6 2.8A.5.5 0 0 0 1 4.05v6.9a.5.5 0 0 0 .289.453l6 2.8a.5.5 0 0 0 .422 0l6-2.8A.5.5 0 0 0 14 10.95v-6.9a.5.5 0 0 0-.289-.453zM7.5 3.157 5.98 2.51 7.5 1.8l1.52.71zm.196 1.003 2.542-1.08 2.034.949L7.5 6.057 2.728 4.029l2.034-.95L7.304 4.16a.5.5 0 0 0 .392 0M8 6.93l5-2.124V7.93l-1.918.882a1 1 0 0 0-.582.908v2.078L8 12.965zm3.5 4.402 1.5-.7V9.03l-1.5.69zM7 6.93v6.034l-2.498-1.166V9.72a1 1 0 0 0-.582-.908L2 7.929V4.806zm-5 3.7 1.502.702V9.72L2 9.03z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};