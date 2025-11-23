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

export const TiUploadOutline = (props: IconProps) => {
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
        <Path d="M20.986 17c0-.105-.004-.211-.038-.316l-2-6a1 1 0 0 0-.56-.594 2.995 2.995 0 0 0-.269-3.914L12 .055 5.879 6.176a3 3 0 0 0-.27 3.914.99.99 0 0 0-.559.594l-2 6a1 1 0 0 0-.038.316C3 17 3 22 3 22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1s0-5-.014-5M7.293 7.59 12 2.883l4.707 4.707a1 1 0 0 1 0 1.414 1.025 1.025 0 0 1-1.414 0L13 6.711V12.5a1 1 0 0 1-2 0V6.711L8.707 9.004a1.025 1.025 0 0 1-1.414 0 1 1 0 0 1 0-1.414M6.721 12H9v.5c0 1.654 1.346 3 3 3s3-1.346 3-3V12h2.279l1.666 5H5.053zM5 21v-3h14v3z" />
      </G>
    </Svg>
  );
};