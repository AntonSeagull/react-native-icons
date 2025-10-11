

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoFileTrayFullSharp = (props: IconProps) => {

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
          <Path d="M448,64H64L32,256V448H480V256ZM436,256H320a64,64,0,0,1-128,0H76L98,106H414Z" />
        </G>
      </Svg>
    );
  }

