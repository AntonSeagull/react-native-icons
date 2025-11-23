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

export const BiRefresh = (props: IconProps) => {
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
        <Path d="M10 11H7.101l.001-.009a5 5 0 0 1 .752-1.787 5.05 5.05 0 0 1 2.2-1.811q.455-.193.938-.291a5.1 5.1 0 0 1 2.018 0 5 5 0 0 1 2.525 1.361l1.416-1.412a7 7 0 0 0-2.224-1.501 7 7 0 0 0-1.315-.408 7.1 7.1 0 0 0-2.819 0 7 7 0 0 0-1.316.409 7.04 7.04 0 0 0-3.08 2.534 7 7 0 0 0-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4zm4 2h2.899l-.001.008a4.98 4.98 0 0 1-2.103 3.138 4.9 4.9 0 0 1-1.787.752 5.1 5.1 0 0 1-2.017 0 5 5 0 0 1-1.787-.752 5 5 0 0 1-.74-.61L7.05 16.95a7 7 0 0 0 2.225 1.5c.424.18.867.317 1.315.408a7.1 7.1 0 0 0 2.818 0 7.03 7.03 0 0 0 4.395-2.945 7 7 0 0 0 1.053-2.503c.027-.135.043-.273.063-.41H22l-4-4z" />
      </G>
    </Svg>
  );
};