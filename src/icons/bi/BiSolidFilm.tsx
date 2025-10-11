

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidFilm = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M19 4v1h-2V3H7v2H5V3H3v18h2v-2h2v2h10v-2h2v2h2V3h-2v1zM5 7h2v2H5V7zm0 4h2v2H5v-2zm0 6v-2h2v2H5zm12 0v-2h2v2h-2zm2-4h-2v-2h2v2zm-2-4V7h2v2h-2z" />
        </G>
      </Svg>
    );
  }

