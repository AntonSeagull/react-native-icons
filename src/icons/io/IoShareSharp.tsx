

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoShareSharp = (props: IconProps) => {

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
          <Path d="M272,176V337H240V176H92a12,12,0,0,0-12,12V468a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V188a12,12,0,0,0-12-12Z" />
        </G>
      </Svg>
    );
  }

