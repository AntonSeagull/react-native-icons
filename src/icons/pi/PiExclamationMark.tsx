

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiExclamationMark = (props: IconProps) => {

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
          <Path d="M144,200a16,16,0,1,1-16-16A16,16,0,0,1,144,200Zm-16-40a8,8,0,0,0,8-8V48a8,8,0,0,0-16,0V152A8,8,0,0,0,128,160Z" />
        </G>
      </Svg>
    );
  }

