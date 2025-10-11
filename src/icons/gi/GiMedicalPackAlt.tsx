

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiMedicalPackAlt = (props: IconProps) => {

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
          <Path d="M76 46c-33.24 0-60 26.76-60 60v300c0 33.24 26.76 60 60 60h360c33.24 0 60-26.76 60-60V106c0-33.24-26.76-60-60-60H76zm0 60h360v300H76V106zm150 60v60h-60v60h60v60h60v-60h60v-60h-60v-60h-60z" fill="#000" />
        </G>
      </Svg>
    );
  }

