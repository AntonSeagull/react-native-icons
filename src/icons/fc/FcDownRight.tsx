

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcDownRight = (props: IconProps) => {

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
          <Path d="M6,21V8h8v13c0,2.2,1.8,4,4,4h17v8H18C11.4,33,6,27.6,6,21z" fill="#3F51B5" />
        </G>
      </Svg>
    );
  }

