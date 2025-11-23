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

export const AiTwotonePicture = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 512, 512)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#333" d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32m-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752z" />
        <Path fill="#E6E6E6" d="m424.6 765.8-150.1-178L136 752.1V792h752v-30.4L658.1 489z" />
        <Path fill="#E6E6E6" d="m136 652.7 132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136zM304 280a88 88 0 1 1 0 176 88 88 0 0 1 0-176" />
        <Path fill="#E6E6E6" d="M276 368a28 28 0 1 0 56 0 28 28 0 1 0-56 0" />
        <Path fill="#333" d="M304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176m0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28" />
      </G>
    </Svg>
  );
};