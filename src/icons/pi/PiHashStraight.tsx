

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHashStraight = (props: IconProps) => {

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
          <Path d="M216,152H168V104h48a8,8,0,0,0,0-16H168V40a8,8,0,0,0-16,0V88H104V40a8,8,0,0,0-16,0V88H40a8,8,0,0,0,0,16H88v48H40a8,8,0,0,0,0,16H88v48a8,8,0,0,0,16,0V168h48v48a8,8,0,0,0,16,0V168h48a8,8,0,0,0,0-16Zm-112,0V104h48v48Z" />
        </G>
      </Svg>
    );
  }

