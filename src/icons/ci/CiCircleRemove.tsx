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

export const CiCircleRemove = (props: IconProps) => {
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
        <Path d="M9.525 13.765a.5.5 0 0 0 .71.71c.59-.59 1.175-1.18 1.765-1.76l1.765 1.76a.5.5 0 0 0 .71-.71c-.59-.58-1.18-1.175-1.76-1.765.41-.42.82-.825 1.23-1.235.18-.18.35-.36.53-.53a.5.5 0 0 0-.71-.71L12 11.293l-1.765-1.768a.5.5 0 0 0-.71.71L11.293 12Z" />
        <Path d="M12 21.933A9.933 9.933 0 1 1 21.934 12 9.945 9.945 0 0 1 12 21.933m0-18.866A8.933 8.933 0 1 0 20.934 12 8.944 8.944 0 0 0 12 3.067" />
      </G>
    </Svg>
  );
};