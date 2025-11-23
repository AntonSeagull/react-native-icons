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

export const GrFreebsd = (props: IconProps) => {
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
        <Path fill="#9B2718" fillRule="evenodd" d="M23.725.403c1.273 1.272-2.254 6.862-2.85 7.458s-2.111.048-3.383-1.224-1.82-2.787-1.224-3.383 6.185-4.123 7.457-2.85M5.885 1.75C3.943.647 1.179-.58.3.3c-.891.89.38 3.717 1.493 5.662C2.784 4.24 4.194 2.79 5.885 1.75m15.9 5.674c.179.606.147 1.108-.143 1.397-.678.678-2.508-.044-4.158-1.614a8 8 0 0 1-.341-.323c-.596-.597-1.06-1.232-1.357-1.817-.578-1.036-.723-1.952-.286-2.388.238-.238.619-.303 1.083-.22.303-.19.66-.404 1.053-.623a11.5 11.5 0 0 0-5.33-1.301C5.928.534.757 5.704.757 12.082S5.927 23.63 12.306 23.63s11.548-5.17 11.548-11.548c0-2.06-.54-3.991-1.485-5.666-.204.373-.403.714-.584 1.007" />
      </G>
    </Svg>
  );
};