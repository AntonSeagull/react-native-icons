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

export const LiaCommentDotsSolid = (props: IconProps) => {
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
        <Path d="M3 5v18h5v5.078L14.352 23H29V5Zm2 2h22v14H13.648L10 23.918V21H5Zm5 5a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4m6 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4m6 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4" />
      </G>
    </Svg>
  );
};