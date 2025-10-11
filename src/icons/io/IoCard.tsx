

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCard = (props: IconProps) => {

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
          <Path d="M32,376a56,56,0,0,0,56,56H424a56,56,0,0,0,56-56V222H32Zm66-76a30,30,0,0,1,30-30h48a30,30,0,0,1,30,30v20a30,30,0,0,1-30,30H128a30,30,0,0,1-30-30Z" />
          <Path d="M424,80H88a56,56,0,0,0-56,56v26H480V136A56,56,0,0,0,424,80Z" />
        </G>
      </Svg>
    );
  }

