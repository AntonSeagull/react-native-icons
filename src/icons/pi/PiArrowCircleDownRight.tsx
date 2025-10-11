

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowCircleDownRight = (props: IconProps) => {

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
          <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-104v48a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h28.69L90.34,101.66a8,8,0,0,1,11.32-11.32L152,140.69V112a8,8,0,0,1,16,0Z" />
        </G>
      </Svg>
    );
  }

