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

export const VscCodeOss = (props: IconProps) => {
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
        <Path d="M5 2h1v11H5zM7 3h4v1H7zM9 5h4v1H9zM9 7h4v1H9zM9 9h4v1H9zM7 11h4v1H7z" />
        <Path d="M2 1 1 2v5h1V2h12v11H2V7H1v6l1 1h12l1-1V2l-1-1z" />
      </G>
    </Svg>
  );
};