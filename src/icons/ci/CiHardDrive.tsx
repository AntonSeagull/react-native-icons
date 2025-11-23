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

export const CiHardDrive = (props: IconProps) => {
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
        <Path d="m20.905 14.325-1.83-10.04a1.51 1.51 0 0 0-1.47-1.22h-11.2A1.49 1.49 0 0 0 4.925 4.3l-1.84 10.03a3 3 0 0 0-.02.27v4.84a1.5 1.5 0 0 0 1.5 1.5h14.87a1.51 1.51 0 0 0 1.5-1.5V14.6a1.2 1.2 0 0 0-.03-.275m-15-9.85a.5.5 0 0 1 .5-.41h11.2a.51.51 0 0 1 .49.4l1.74 9.54H4.165Zm14.03 14.96a.5.5 0 0 1-.5.5H4.565a.5.5 0 0 1-.5-.5l.01-4.43h15.86Z" />
        <Circle cx={5.561} cy={17.47} r={0.5} />
        <Circle cx={7.561} cy={17.47} r={0.5} />
        <Path d="M18.45 17.97a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Z" />
      </G>
    </Svg>
  );
};