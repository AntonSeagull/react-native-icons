

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcLeftDown2 = (props: IconProps) => {

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
          <Path d="M27,6h13v8H27c-2.2,0-4,1.8-4,4v17h-8V18C15,11.4,20.4,6,27,6z" fill="#3F51B5" />
        </G>
      </Svg>
    );
  }

