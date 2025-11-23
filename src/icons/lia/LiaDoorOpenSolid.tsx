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

export const LiaDoorOpenSolid = (props: IconProps) => {
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
        <Path d="m15.875 4-.094.031-8 1.875L7 6.094v20.25l.813.125 8 1.5.093.031H18V4ZM20 6v2h3v16h-3v2h5V6Zm-4 .031V26l-7-1.312V7.656ZM14.344 15c-.367 0-.688.45-.688 1s.32 1 .688 1 .656-.45.656-1-.29-1-.656-1" />
      </G>
    </Svg>
  );
};