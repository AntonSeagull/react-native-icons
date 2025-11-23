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

export const TfiNotepad = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M1 0v17h15V0zm14 16H2V1h2v1.092c-.581.207-1 .757-1 1.408C3 4.327 3.673 5 4.5 5S6 4.327 6 3.5c0-.651-.419-1.201-1-1.408V1h3v1.092c-.581.207-1 .757-1 1.408C7 4.327 7.673 5 8.5 5S10 4.327 10 3.5c0-.651-.419-1.201-1-1.408V1h3v1.092c-.581.207-1 .757-1 1.408 0 .827.673 1.5 1.5 1.5S14 4.327 14 3.5c0-.651-.419-1.201-1-1.408V1h2zM5 3.5c0 .275-.225.5-.5.5S4 3.775 4 3.5s.225-.5.5-.5.5.225.5.5m4 0c0 .275-.225.5-.5.5S8 3.775 8 3.5s.225-.5.5-.5.5.225.5.5m4 0c0 .275-.225.5-.5.5s-.5-.225-.5-.5.225-.5.5-.5.5.225.5.5" />
      </G>
    </Svg>
  );
};