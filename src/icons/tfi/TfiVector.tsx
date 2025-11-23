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

export const TfiVector = (props: IconProps) => {
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
        <Path d="M14.94 6a6.46 6.46 0 0 0-3.44-1 6.5 6.5 0 0 0-2.239.404l2.569-2.569c.203.102.428.165.67.165.827 0 1.5-.673 1.5-1.5S13.327 0 12.5 0 11 .673 11 1.5c0 .22.05.428.136.616l-3.91 3.909A1.5 1.5 0 0 0 6.976 6c-.827 0-1.5.673-1.5 1.5 0 .085.011.168.025.25l-3.386 3.386A1.5 1.5 0 0 0 1.5 11c-.827 0-1.5.673-1.5 1.5S.673 14 1.5 14 3 13.327 3 12.5c0-.242-.063-.467-.165-.669l2.57-2.57A6.5 6.5 0 0 0 5 11.5c0 1.469.612 2.735 1 3.391V17h3v-3H6.664C6.246 13.174 6 12.287 6 11.5c0-.887.22-1.764.628-2.545.113.027.228.045.348.045.827 0 1.5-.673 1.5-1.5 0-.18-.037-.35-.095-.51 1.644-1.131 3.847-1.268 5.619-.373V9h3V6zM12.5 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-11 12a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M7 15h1v1H7zm-.024-7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M16 8h-1V7h1z" />
      </G>
    </Svg>
  );
};