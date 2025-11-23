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

export const SiXmpp = (props: IconProps) => {
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
        <Path d="m3.401 4.594 1.025.366 3.08.912q-.016.27-.016.543c0 3.353 1.693 7.444 4.51 10.387 2.817-2.943 4.51-7.034 4.51-10.387q0-.273-.016-.543l3.08-.912 1.025-.366L24 3.276C23.854 8.978 19.146 14.9 13.502 18.17c1.302 1.028 2.778 1.81 4.388 2.215v.114l.004.001v.224a14.6 14.6 0 0 1-4.829-1.281A21 21 0 0 1 12 18.966q-.53.255-1.065.477a14.6 14.6 0 0 1-4.829 1.281V20.5l.004-.001v-.113c1.61-.406 3.086-1.188 4.389-2.216C4.854 14.9.146 8.978 0 3.276z" />
      </G>
    </Svg>
  );
};