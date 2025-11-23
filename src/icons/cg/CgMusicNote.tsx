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

export const CgMusicNote = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="m12 8.954 5.635-1.127a2.942 2.942 0 0 0-1.154-5.769l-4.07.814A3 3 0 0 0 10 5.814v8.076a4 4 0 1 0 2 3.465zm4.874-4.935-4.07.814a1 1 0 0 0-.804.98v1.102l5.243-1.049a.942.942 0 0 0-.37-1.847M10 17.354a2 2 0 1 0-4 0 2 2 0 0 0 4 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};