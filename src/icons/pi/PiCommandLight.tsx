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

export const PiCommandLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M180 146h-22v-36h22a34 34 0 1 0-34-34v22h-36V76a34 34 0 1 0-34 34h22v36H76a34 34 0 1 0 34 34v-22h36v22a34 34 0 1 0 34-34m-22-70a22 22 0 1 1 22 22h-22ZM54 76a22 22 0 0 1 44 0v22H76a22 22 0 0 1-22-22m44 104a22 22 0 1 1-22-22h22Zm12-70h36v36h-36Zm70 92a22 22 0 0 1-22-22v-22h22a22 22 0 0 1 0 44" />
      </G>
    </Svg>
  );
};