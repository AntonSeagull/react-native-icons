

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiTable = (props: IconProps) => {

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
          <Path d="M41 265v30h430v-30H41zm39 48v158.066h32V313H80zm320 0v158.066h32V313h-32z" fill="#000" />
        </G>
      </Svg>
    );
  }

