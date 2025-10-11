

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcFilmReel = (props: IconProps) => {

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
          <Path d="M43,39V24h-4v15c0,5,4,9,9,9v-4C45.2,44,43,41.8,43,39z" fill="#3F51B5" />
        </G>
      </Svg>
    );
  }

