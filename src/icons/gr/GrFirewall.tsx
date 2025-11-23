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

export const GrFirewall = (props: IconProps) => {
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
        <Path fill="#000" fillRule="evenodd" d="M6.006 2.02a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm5.916 2.976a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1zm-8.822 0a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1zm0 9.992a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1zm7.723 1.1a1.1 1.1 0 0 1 1.1-1.1h5.8a1.1 1.1 0 0 1 1.1 1.1v1.8a1.1 1.1 0 0 1-1.1 1.1h-5.8a1.1 1.1 0 0 1-1.1-1.1zm-5.975-5.015a1.1 1.1 0 0 1 1.1-1.1h5.8a1.1 1.1 0 0 1 1.1 1.1v1.8a1.1 1.1 0 0 1-1.1 1.1h-5.8a1.1 1.1 0 0 1-1.1-1.1zm9.866-1.061a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1zM14 3.019a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m1 16.962a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm-9.988 1a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1M3 9.973a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m16.63-3.977a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0zm1.015 8.992a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1M2 20.981a1 1 0 1 1 2 0 1 1 0 0 1-2 0M3.011 2.019a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
      </G>
    </Svg>
  );
};