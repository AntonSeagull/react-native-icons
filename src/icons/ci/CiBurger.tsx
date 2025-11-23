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

export const CiBurger = (props: IconProps) => {
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
        <Path d="M19.325 11.015a7.344 7.344 0 0 0-14.66 0 2.014 2.014 0 0 0-1.6 1.96v.16a2.016 2.016 0 0 0 1.64 1.97l.27 2.45a2.593 2.593 0 0 0 2.59 2.32h8.87a2.593 2.593 0 0 0 2.59-2.32l.27-2.45a2.016 2.016 0 0 0 1.64-1.97v-.16a2 2 0 0 0-1.61-1.96M12 5.125a6.365 6.365 0 0 1 6.34 5.85H5.665A6.36 6.36 0 0 1 12 5.125m6.04 12.32a1.6 1.6 0 0 1-1.6 1.43H7.565a1.6 1.6 0 0 1-1.6-1.43l-.26-2.31H18.3Zm1.9-4.31a1 1 0 0 1-1 1H5.065a1 1 0 0 1-1-1v-.16a1 1 0 0 1 1-1h13.87a1 1 0 0 1 1 1Z" />
        <Circle cx={12} cy={6.622} r={0.5} />
        <Circle cx={8.323} cy={8.323} r={0.5} />
        <Circle cx={15.676} cy={8.323} r={0.5} />
      </G>
    </Svg>
  );
};