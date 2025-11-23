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

export const CiImageOn = (props: IconProps) => {
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
        <Path d="M18.435 3.06H5.565a2.5 2.5 0 0 0-2.5 2.5v12.88a2.507 2.507 0 0 0 2.5 2.5h12.87a2.507 2.507 0 0 0 2.5-2.5V5.56a2.5 2.5 0 0 0-2.5-2.5m-14.37 2.5a1.5 1.5 0 0 1 1.5-1.5h12.87a1.5 1.5 0 0 1 1.5 1.5v8.66l-3.88-3.88a1.51 1.51 0 0 0-2.12 0l-4.56 4.57a.513.513 0 0 1-.71 0l-.56-.56a1.52 1.52 0 0 0-2.12 0l-1.92 1.92Zm15.87 12.88a1.5 1.5 0 0 1-1.5 1.5H5.565a1.5 1.5 0 0 1-1.5-1.5v-.75L6.7 15.06a.5.5 0 0 1 .35-.14.52.52 0 0 1 .36.14l.55.56a1.51 1.51 0 0 0 2.12 0l4.57-4.57a.5.5 0 0 1 .71 0l4.58 4.58Z" />
        <Path d="M8.062 10.565a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5m0-4a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5" />
      </G>
    </Svg>
  );
};