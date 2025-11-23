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

export const VscLibrary = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m5 2.5.5-.5h2l.5.5v11l-.5.5h-2l-.5-.5zM6 3v10h1V3zm3.171.345.299-.641 1.88-.684.64.299 3.762 10.336-.299.641-1.879.684-.64-.299zm1.11.128 3.42 9.396.94-.341-3.42-9.397zM1 2.5l.5-.5h2l.5.5v11l-.5.5h-2l-.5-.5zM2 3v10h1V3z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};