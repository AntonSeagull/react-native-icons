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

export const GrTwitter = (props: IconProps) => {
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
        <Path fill="#1DA1F2" fillRule="evenodd" d="M24 4.309a9.8 9.8 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.724 9.9 9.9 0 0 1-3.127 1.196 4.925 4.925 0 0 0-8.39 4.49A13.97 13.97 0 0 1 1.671 2.9a4.9 4.9 0 0 0-.667 2.476c0 1.708.869 3.216 2.191 4.099A4.94 4.94 0 0 1 .964 8.86v.06a4.926 4.926 0 0 0 3.95 4.829 4.964 4.964 0 0 1-2.224.085 4.93 4.93 0 0 0 4.6 3.42 9.9 9.9 0 0 1-6.115 2.107q-.597 0-1.175-.068a13.95 13.95 0 0 0 7.548 2.212c9.057 0 14.009-7.503 14.009-14.01q0-.32-.014-.636A10 10 0 0 0 24 4.309" />
      </G>
    </Svg>
  );
};