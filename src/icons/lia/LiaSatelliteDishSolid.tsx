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

export const LiaSatelliteDishSolid = (props: IconProps) => {
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
        <Path d="M16.5 4.5v2c4.984 0 9 4.016 9 9h2c0-6.062-4.937-11-11-11m0 4v2c2.773 0 5 2.227 5 5h2c0-3.855-3.145-7-7-7m-8.594.094-.687.687c-4.27 4.27-4.27 11.23 0 15.5s11.23 4.27 15.5 0l.687-.687-.687-.719-5.5-5.5C18.242 17.563 19 16.629 19 15.5c0-1.379-1.121-2.5-2.5-2.5-1.129 0-2.062.758-2.375 1.781l-5.5-5.5Zm.157 2.969 12.375 12.375c-3.52 2.792-8.555 2.695-11.813-.563s-3.355-8.293-.562-11.812" />
      </G>
    </Svg>
  );
};