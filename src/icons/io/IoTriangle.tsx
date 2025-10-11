

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoTriangle = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M464,464H48a16,16,0,0,1-14.07-23.62l208-384a16,16,0,0,1,28.14,0l208,384A16,16,0,0,1,464,464Z" />
        </G>
      </Svg>
    );
  }

