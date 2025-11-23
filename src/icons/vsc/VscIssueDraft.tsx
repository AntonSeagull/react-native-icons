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

export const VscIssueDraft = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m12.732 9.2.952.31A6.5 6.5 0 0 0 14 7.5c0-.701-.111-1.377-.316-2.01l-.952.31c.174.534.268 1.105.268 1.7s-.094 1.166-.268 1.7m-.33-4.197.89-.455a6.53 6.53 0 0 0-2.84-2.84l-.455.89a5.53 5.53 0 0 1 2.405 2.405M9.2 2.268l.31-.951A6.5 6.5 0 0 0 7.5 1c-.701 0-1.377.111-2.01.317l.31.95A5.5 5.5 0 0 1 7.5 2c.595 0 1.166.094 1.7.268m-4.197.33-.455-.89a6.53 6.53 0 0 0-2.84 2.84l.89.455a5.53 5.53 0 0 1 2.405-2.405M1 7.5c0-.701.111-1.377.317-2.01l.95.31A5.5 5.5 0 0 0 2 7.5c0 .595.094 1.166.268 1.7l-.951.31A6.5 6.5 0 0 1 1 7.5m1.598 2.497-.89.455a6.53 6.53 0 0 0 2.84 2.84l.455-.89a5.53 5.53 0 0 1-2.405-2.405M5.8 12.732l-.31.952A6.5 6.5 0 0 0 7.5 14c.701 0 1.377-.111 2.01-.316l-.31-.952A5.5 5.5 0 0 1 7.5 13a5.5 5.5 0 0 1-1.7-.268m4.197-.33.455.89a6.53 6.53 0 0 0 2.84-2.84l-.89-.455a5.53 5.53 0 0 1-2.405 2.405M7.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clipRule="evenodd" />
      </G>
    </Svg>
  );
};