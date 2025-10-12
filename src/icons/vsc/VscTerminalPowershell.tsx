

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscTerminalPowershell = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M2.5 1.007l12.999.17.43.501-1.82 12.872-.57.489-13-.17-.43-.502L1.93 1.495l.57-.488zM1.18 13.885l11.998.157 1.68-11.882L2.86 2.003 1.18 13.885zm5.791-3.49l-.14.991 5 .066.14-.99-5-.066zm1.71-2.457l-3.663-2.93-.692.796 2.636 2.112L3.739 9.95l.465.812L8.68 7.938z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

