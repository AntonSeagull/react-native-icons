

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImChart = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M7 9v-7c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7c0-1.126-0.266-2.189-0.738-3.131l-6.262 3.131zM14.262 3.869c-1.149-2.294-3.521-3.869-6.262-3.869v7l6.262-3.131z" fill="#000000" />
        </G>
      </Svg>
    );
  }

