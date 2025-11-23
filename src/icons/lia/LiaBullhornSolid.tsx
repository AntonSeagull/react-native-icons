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

export const LiaBullhornSolid = (props: IconProps) => {
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
        <Path d="m28 3.031-1.594 1.156s-1.988 1.477-4.843 2.938C18.707 8.585 14.988 10 11.719 10H2v9.125l.031.156 2 7L4.25 27h6.063l-.344-1.281L8.344 20h3.375c3.226 0 6.945 1.441 9.812 2.906s4.875 2.907 4.875 2.907L28 26.969v-9.157c1.156-.417 2-1.519 2-2.812s-.844-2.395-2-2.812ZM26 6.75v16.469c-.828-.559-1.484-1.067-3.562-2.125C19.5 19.594 15.707 18.074 12 18v-6c3.742-.074 7.54-1.625 10.469-3.125C24.543 7.813 25.179 7.309 26 6.75M4 12h6v6H4Zm.344 8H6.25l1.406 5H5.75Z" />
      </G>
    </Svg>
  );
};