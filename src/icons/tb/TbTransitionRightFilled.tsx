

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTransitionRightFilled = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1 -4 4a1 1 0 0 1 -.117 -1.993l.117 -.007a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2a1 1 0 0 1 0 -2m-8 16a4 4 0 1 1 -8 0v-12a4 4 0 1 1 8 0v5h4.585l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.414 0l3 3l.097 .112l.071 .11l.031 .062l.034 .081l.024 .076l.03 .148l.006 .118l-.004 .085l-.016 .116l-.03 .111l-.044 .111l-.052 .098l-.074 .104l-.073 .082l-3 3a1 1 0 0 1 -1.414 -1.414l1.292 -1.293h-4.585z" />
        </G>
      </Svg>
    );
  }

