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

export const LiaShuttleVanSolid = (props: IconProps) => {
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
        <Path d="M5 5C3.355 5 2 6.355 2 8v17h3.156c.446 1.719 1.992 3 3.844 3s3.398-1.281 3.844-3h7.312c.446 1.719 1.992 3 3.844 3s3.398-1.281 3.844-3H31V14.563c0-.563-.172-1.118-.469-1.594l-4.093-6.563A2.98 2.98 0 0 0 23.906 5Zm0 2h5v6H4V8c0-.562.438-1 1-1m7 0h6v6h-6Zm8 0h3.906c.348 0 .66.176.844.469L28.188 13H20ZM4 15h25v2h-3v2h3v4h-1.156c-.446-1.719-1.992-3-3.844-3s-3.398 1.281-3.844 3h-7.312c-.446-1.719-1.992-3-3.844-3s-3.398 1.281-3.844 3H4Zm5 7c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2m15 0c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2" />
      </G>
    </Svg>
  );
};