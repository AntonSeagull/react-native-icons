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

export const VscCommentDraft = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M14.5 2.001H13v1h1v1h1v-1.5zm-5.5 0h2v1H9zm-4 0h2v1H5zm9 8v2h.5l.5-.5v-1.5zm-2 2v-1h-2v1zm-4-1h-.5l-.354.146L5 13.294v-1.793l-.5-.5H4v3.5l.854.354 2.853-2.854H8zm7-3v-2h-1v2zm-13 3v-1H1v1.5l.5.5H2zm0-3v-2H1v2zm0-5v1H1v-1.5l.5-.5H3v1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};