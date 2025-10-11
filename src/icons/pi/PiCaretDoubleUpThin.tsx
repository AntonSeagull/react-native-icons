

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretDoubleUpThin = (props: IconProps) => {

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
          <Path d="M210.83,197.17a4,4,0,0,1-5.66,5.66L128,125.66,50.83,202.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0Zm-160-74.34L128,45.66l77.17,77.17a4,4,0,1,0,5.66-5.66l-80-80a4,4,0,0,0-5.66,0l-80,80a4,4,0,0,0,5.66,5.66Z" />
        </G>
      </Svg>
    );
  }

