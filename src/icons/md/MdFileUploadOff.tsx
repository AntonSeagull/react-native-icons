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

export const MdFileUploadOff = (props: IconProps) => {
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
        <Path d="M21.19 21.19 2.81 2.81 1.39 4.22l4.7 4.69L5 10h2.17L9 11.83V16h4.17l2 2H5v2h12.17l2.61 2.61zM15 10h4l-7-7-3.09 3.09L15 12.17z" />
      </G>
    </Svg>
  );
};