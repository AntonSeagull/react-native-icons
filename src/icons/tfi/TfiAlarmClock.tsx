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

export const TfiAlarmClock = (props: IconProps) => {
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
        <Path d="M14.714 6.791a2.7 2.7 0 0 0 .786-1.903 2.73 2.73 0 0 0-2.725-2.726c-.886 0-1.695.434-2.207 1.15A7 7 0 0 0 9 3.025V2h1V1H7v1h1v1.025a7 7 0 0 0-1.568.287 2.7 2.7 0 0 0-2.207-1.15A2.73 2.73 0 0 0 1.5 4.888c0 .723.282 1.392.786 1.903a6.963 6.963 0 0 0 .849 7.696L1.85 16.2l.8.6 1.192-1.59C5.081 16.319 6.71 17 8.5 17s3.419-.681 4.658-1.79l1.192 1.59.8-.6-1.285-1.713a6.96 6.96 0 0 0 .849-7.696m-1.939-3.629c.951 0 1.725.774 1.725 1.726 0 .373-.12.724-.335 1.017a7 7 0 0 0-2.63-2.202 1.7 1.7 0 0 1 1.24-.541M2.5 4.888c0-.951.774-1.726 1.725-1.726.478 0 .918.202 1.24.54a7.05 7.05 0 0 0-2.63 2.202A1.7 1.7 0 0 1 2.5 4.888M8.5 16c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6m.5-6h4v1H8V7h1z" />
      </G>
    </Svg>
  );
};