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

export const LiaShirtsinbulk = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5 4v19.438l.594.25 9.875 4.218.375.188.406-.157 10.125-4.25.625-.25V4Zm2 2h18v3H7Zm0 5h18v11.094l-9.156 3.812L7 22.094Zm9 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10m.188 2.031c1.406 0 2.546.809 2.593.844l-.75 1.031c-.008-.008-.86-.625-1.843-.625-.602 0-1.625.168-1.625.782.222.257 1.093.246 1.468.25h.188c1.633 0 2.687.62 2.687 1.625 0 .933-.738 2.03-2.781 2.03-1.54 0-2.82-.808-2.875-.843l.688-1.031c.011.008 1.023.625 2.187.625.7 0 1.531-.211 1.531-.782 0-.16-.617-.375-1.437-.375h-.157c-.761-.003-1.796-.019-2.375-.593a1.23 1.23 0 0 1-.374-.907c0-1.23 1.128-2.03 2.874-2.03" />
      </G>
    </Svg>
  );
};