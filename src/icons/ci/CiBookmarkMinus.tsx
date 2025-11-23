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

export const CiBookmarkMinus = (props: IconProps) => {
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
        <Path d="M17.6 21.938a1.48 1.48 0 0 1-1.011-.4l-4.251-3.9a.5.5 0 0 0-.678 0l-4.25 3.9a1.5 1.5 0 0 1-2.517-1.1V4.563a2.5 2.5 0 0 1 2.5-2.5h9.214a2.5 2.5 0 0 1 2.5 2.5v15.872a1.48 1.48 0 0 1-.9 1.375 1.5 1.5 0 0 1-.607.128M12 16.5a1.5 1.5 0 0 1 1.018.395l4.251 3.905a.5.5 0 0 0 .838-.368V4.563a1.5 1.5 0 0 0-1.5-1.5H7.393a1.5 1.5 0 0 0-1.5 1.5v15.872a.5.5 0 0 0 .839.368l4.251-3.903A1.5 1.5 0 0 1 12 16.5" />
        <Path d="M10 10.277a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1Z" />
      </G>
    </Svg>
  );
};