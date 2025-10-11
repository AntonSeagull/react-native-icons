

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberSix = (props: IconProps) => {

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
          <Path d="M128,104a56,56,0,0,0-15.62,2.23L143,51.93A8,8,0,1,0,129,44.08l-49.55,88A56,56,0,1,0,128,104Zm0,96a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z" />
        </G>
      </Svg>
    );
  }

