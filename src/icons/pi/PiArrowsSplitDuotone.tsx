

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowsSplitDuotone = (props: IconProps) => {

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
          <Path d="M192,136v80H64V136l64-64Z" />
          <Path d="M229.66,189.66l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L184,196.69V139.31l-56-56-56,56v57.38l18.34-18.35a8,8,0,0,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L56,196.69V136a8,8,0,0,1,2.34-5.66L120,68.69V24a8,8,0,0,1,16,0V68.69l61.66,61.65A8,8,0,0,1,200,136v60.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z" />
        </G>
      </Svg>
    );
  }

