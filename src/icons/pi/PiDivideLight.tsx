

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDivideLight = (props: IconProps) => {

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
          <Path d="M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM128,78a14,14,0,1,0-14-14A14,14,0,0,0,128,78Zm0,100a14,14,0,1,0,14,14A14,14,0,0,0,128,178Z" />
        </G>
      </Svg>
    );
  }

