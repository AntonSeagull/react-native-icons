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

export const TfiDesktop = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M2 11h13V3H2zm1-7h11v6H3zm12.5-3h-14C.673 1 0 1.638 0 2.423v10.154C0 13.362.673 14 1.5 14h14c.827 0 1.5-.638 1.5-1.423V2.423C17 1.638 16.327 1 15.5 1m.5 11.577c0 .234-.225.423-.5.423h-14c-.275 0-.5-.189-.5-.423V2.423C1 2.189 1.225 2 1.5 2h14c.275 0 .5.189.5.423zM5 15h7v1H5z" />
      </G>
    </Svg>
  );
};