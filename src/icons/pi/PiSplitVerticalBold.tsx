

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSplitVerticalBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M220,152a12,12,0,0,1-12,12H140v39l11.51-11.52a12,12,0,0,1,17,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,0,1,17-17L116,203V164H48a12,12,0,0,1,0-24H208A12,12,0,0,1,220,152ZM48,116H208a12,12,0,0,0,0-24H140V53l11.51,11.52a12,12,0,1,0,17-17l-32-32a12,12,0,0,0-17,0l-32,32a12,12,0,1,0,17,17L116,53V92H48a12,12,0,0,0,0,24Z" />
        </G>
      </Svg>
    );
  }

