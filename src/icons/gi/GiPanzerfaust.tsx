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

export const GiPanzerfaust = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m227.752 139.172 51.998 54.29 13-12.45-52-54.29zM187.74 256.424l9.683 10.11 56.33-53.952-9.684-10.11-56.33 53.952zM385.14 72.18l-38.345 72.733 24.227 25.294 74.315-35.176-60.198-62.85zm15.994-9.322 54.207 56.595 7.832-35.195-26.54-27.708zM48.828 433.784l20.75 21.666 9.39-8.992-20.752-21.666zm22.388-21.442 20.75 21.665 264.318-253.164-20.75-21.666z" />
      </G>
    </Svg>
  );
};