

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcRightDown2 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M21,6H8v8h13c2.2,0,4,1.8,4,4v17h8V18C33,11.4,27.6,6,21,6z" fill="#3F51B5" />
        </G>
      </Svg>
    );
  }

