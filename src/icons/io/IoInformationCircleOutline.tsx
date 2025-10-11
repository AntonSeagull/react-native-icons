

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoInformationCircleOutline = (props: IconProps) => {

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
          <Path d="M248,64C146.39,64,64,146.39,64,248s82.39,184,184,184,184-82.39,184-184S349.61,64,248,64Z" />
          <Path d="M248,130a26,26,0,1,0,26,26A26,26,0,0,0,248,130Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

