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

export const RiRecycleFill = (props: IconProps) => {
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
        <Path d="m19.561 12.099 1.532 2.651A3.5 3.5 0 0 1 18.06 20H16v2l-5-3.5 5-3.5v2h2.062a.5.5 0 0 0 .471-.668l-.038-.082-1.53-2.652zM7.736 9.384l.531 6.08-1.731-1-1.032 1.786a.5.5 0 0 0 .343.742l.09.008H9v3H5.937a3.5 3.5 0 0 1-3.031-5.25l1.032-1.786-1.733-1zM13.75 2.97A3.5 3.5 0 0 1 15.03 4.25l1.031 1.786 1.733-1-.532 6.08-5.53-2.58 1.73-1-1.03-1.786a.5.5 0 0 0-.814-.074l-.052.074-1.53 2.652-2.598-1.5 1.53-2.652A3.5 3.5 0 0 1 13.75 2.97" />
      </G>
    </Svg>
  );
};