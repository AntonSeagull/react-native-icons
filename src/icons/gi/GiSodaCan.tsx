

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiSodaCan = (props: IconProps) => {

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
          <Path d="M171 42l-20 48h210l-20-48H171zm-19.45 65.55v296.9h208.9v-296.9h-208.9zM151 422l20 48h170l20-48H151z" fill="#000" />
        </G>
      </Svg>
    );
  }

