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

export const VscTerminalPowershell = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m2.5 1.007 12.999.17.43.501-1.82 12.872-.57.489-13-.17-.43-.502L1.93 1.495zM1.18 13.885l11.998.157 1.68-11.882L2.86 2.003zm5.791-3.49-.14.991 5 .066.14-.99zm1.71-2.457-3.663-2.93-.692.796 2.636 2.112L3.739 9.95l.465.812z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};