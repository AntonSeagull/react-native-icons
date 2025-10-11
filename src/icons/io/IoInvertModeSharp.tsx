

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoInvertModeSharp = (props: IconProps) => {

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
          <Path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM256,432V336a80,80,0,0,1,0-160V80C353.05,80,432,159,432,256S353.05,432,256,432Z" />
          <Path d="M336,256a80,80,0,0,0-80-80V336A80,80,0,0,0,336,256Z" />
        </G>
      </Svg>
    );
  }

